import React, { useState, useRef, useEffect } from "react";
import "./ShuffleCard.css";
import ConnectButton from "./ConnectButton";
import ShuffleIcon from "@mui/icons-material/Shuffle";

const ShuffleCard = () => {
  const initialCards = [
    { id: 1, text: "Card 1", color: "#ffcccc" },
    { id: 2, text: "Card 2", color: "#ccffcc" },
    { id: 3, text: "Card 3", color: "#ccccff" },
    { id: 4, text: "Card 4", color: "#ffffcc" },
  ];

  const [cards, setCards] = useState(initialCards);
  const [direction, setDirection] = useState("right");
  const [draggingCard, setDraggingCard] = useState(null);
  const [animatingCard, setAnimatingCard] = useState(null);
  const dragStartX = useRef(0);
  const currentX = useRef(0);
  const cardRef = useRef(null);

  const handleShuffle = () => {
    const topCardId = cards[0].id;
    setAnimatingCard(topCardId); // Mark for animation
    setDirection(direction === "right" ? "left" : "right");

    setTimeout(() => {
      setCards((prevCards) => {
        const newCards = [...prevCards];
        const topCard = newCards.shift();
        newCards.push(topCard);
        return newCards;
      });
      setAnimatingCard(null); // Reset after animation
    }, 500); // Match CSS transition duration
  };

  const handlePointerDown = (e, cardId) => {
    if (cards[0].id !== cardId || animatingCard) return; // Only drag top card, not during shuffle
    setDraggingCard(cardId);
    dragStartX.current = e.clientX;
    currentX.current = 0;
    cardRef.current = e.currentTarget;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!draggingCard || !cardRef.current) return;
    currentX.current = e.clientX - dragStartX.current;
    cardRef.current.style.transform = `translateX(${
      currentX.current
    }px) rotate(${currentX.current / 20}deg)`;
  };

  const handlePointerUp = (e, cardId) => {
    if (!draggingCard || !cardRef.current) return;
    cardRef.current.releasePointerCapture(e.pointerId);
    if (Math.abs(currentX.current) > 150) {
      setCards((prevCards) => {
        const newCards = [...prevCards];
        const draggedCardIndex = newCards.findIndex(
          (card) => card.id === cardId
        );
        const [draggedCard] = newCards.splice(draggedCardIndex, 1);
        newCards.push(draggedCard);
        return newCards;
      });
    }
    cardRef.current.style.transition = "transform 0.3s ease";
    cardRef.current.style.transform = "";
    setTimeout(() => {
      cardRef.current.style.transition = "";
    }, 300);
    setDraggingCard(null);
    cardRef.current = null;
  };

  useEffect(() => {
    const onPointerMove = (e) => handlePointerMove(e);
    const onPointerUp = (e) => {
      if (draggingCard) handlePointerUp(e, draggingCard);
    };

    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerup", onPointerUp);

    return () => {
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerup", onPointerUp);
    };
  }, [draggingCard]);

  return (
    <div className="container">
      <div className="card-container">
        {cards.map((card, index) => {
          const zIndex = cards.length - index;
          const rotation = index % 2 === 0 ? 5 : -5;
          const translateY = index * 10;
          const isTopCard = index === 0;
          const isBeingDragged = draggingCard === card.id;
          const isAnimating = animatingCard === card.id;

          return (
            <div
              key={card.id}
              className={`card ${isBeingDragged ? "dragging" : ""} ${
                isAnimating ? "sliding-out" : ""
              }`}
              style={{
                zIndex,
                transform: isBeingDragged
                  ? `translateX(${currentX.current}px) rotate(${
                      currentX.current / 20
                    }deg)`
                  : `rotate(${rotation}deg) translateY(${translateY}px)`,
                backgroundColor: card.color,
                pointerEvents: isTopCard && !isAnimating ? "auto" : "none",
                cursor:
                  isTopCard && !isBeingDragged && !isAnimating
                    ? "grab"
                    : isBeingDragged
                    ? "grabbing"
                    : "default",
                transition: isBeingDragged ? "none" : "transform 0.5s ease",
                ...(isAnimating && {
                  transform: `translateX(${
                    direction === "right" ? "-100%" : "100%"
                  })`,
                }),
              }}
              onPointerDown={(e) => handlePointerDown(e, card.id)}
              onPointerUp={(e) => handlePointerUp(e, card.id)}
            >
              {card.text}
            </div>
          );
        })}
      </div>
      <div style={{ zIndex: 1000 }}>
        <ConnectButton
          onClick={handleShuffle}
          bgColor="#fff"
          Icon={ShuffleIcon}
          iconPosition="left"
          label="Shuffle"
        />
      </div>
    </div>
  );
};

export default ShuffleCard;
