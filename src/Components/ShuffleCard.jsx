import React, { useState, useRef, useEffect } from "react";
import "./ShuffleCard.css";

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
  const dragStartX = useRef(0);
  const currentX = useRef(0);
  const cardRef = useRef(null);

  const handleShuffle = () => {
    setCards((prevCards) => {
      const newCards = [...prevCards];
      const topCard = newCards.shift();
      newCards.push(topCard);
      return newCards;
    });
    setDirection(direction === "right" ? "left" : "right");
  };

  const handlePointerDown = (e, cardId) => {
    console.log("hi");
    if (cards[0].id !== cardId) return; // Only drag top card
    setDraggingCard(cardId);
    dragStartX.current = e.clientX;
    currentX.current = 0;
    cardRef.current = e.currentTarget;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!draggingCard || !cardRef.current) return;
    currentX.current = e.clientX - dragStartX.current;
    cardRef.current.style.transform = `translateX(${currentX.current}px) rotate(0deg)`;
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
      cardRef.current.style.transform = "translateX(0px) rotate(0deg)";
    } else {
      cardRef.current.style.transform = "rotate(0deg)";
    }
    setDraggingCard(null);
    cardRef.current = null;
  };

  useEffect(() => {
    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerup", (e) => {
      if (draggingCard) handlePointerUp(e, draggingCard);
    });

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerup", handlePointerUp);
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

          const animationStyle =
            isTopCard && !isBeingDragged && !draggingCard
              ? {
                  transform: `translateX(${
                    direction === "right" ? "-100%" : "100%"
                  })`,
                  opacity: 0,
                  transition: "transform 0.5s ease, opacity 0.5s ease",
                }
              : {};

          return (
            <div
              key={card.id}
              className={`card ${isBeingDragged ? "dragging" : ""}`}
              style={{
                zIndex,
                transform: isBeingDragged
                  ? `translateX(${currentX.current}px) rotate(0deg)`
                  : `rotate(${rotation}deg) translateY(${translateY}px)`,
                backgroundColor: card.color,
                ...animationStyle,
                pointerEvents: isTopCard ? "auto" : "none",
              }}
              onPointerDown={(e) => handlePointerDown(e, card.id)}
              onPointerUp={(e) => console.log("hi")}
            >
              {card.text}
            </div>
          );
        })}
      </div>
      <button className="shuffle-button" onClick={handleShuffle}>
        Shuffle
      </button>
    </div>
  );
};

export default ShuffleCard;
