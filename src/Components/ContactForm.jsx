import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./ContactForm.css";
import ConnectButton from "./ConnectButton";

// Reusable TextField component
const CustomTextField = ({
  label,
  value,
  onChange,
  error,
  helperText,
  multiline = false,
  rows = 1,
}) => (
  <TextField
    label={label}
    variant="outlined"
    fullWidth
    multiline={multiline}
    rows={rows}
    value={value}
    onChange={onChange}
    error={!!error}
    helperText={helperText}
    InputLabelProps={{ style: { color: "black" } }}
    InputProps={{
      style: { color: "black" },
    }}
    sx={{
      "& .MuiOutlinedInput-root": {
        "& fieldset": { borderColor: "#f0bb0d" },
        "&:hover fieldset": { borderColor: "#f489a3" },
        "&.Mui-focused fieldset": { borderColor: "#f489a3" },
      },
      "& .Mui-focused": {
        color: "#f489a3",
      },
    }}
  />
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    setErrors({ ...errors, [field]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted!");
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <CustomTextField
          label="Name"
          value={formData.name}
          onChange={handleChange("name")}
          error={errors.name}
          helperText={errors.name}
        />
        <CustomTextField
          label="Email"
          value={formData.email}
          onChange={handleChange("email")}
          error={errors.email}
          helperText={errors.email}
        />
        <CustomTextField
          label="Message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange("message")}
          error={errors.message}
          helperText={errors.message}
        />
        <button type="submit" className="submit-button">
          Submit <ArrowForwardIcon className="arrow-icon" />
        </button>
      </form>
    </Box>
  );
};

export default ContactForm;
