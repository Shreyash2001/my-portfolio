import React, { useState } from "react";
import {
  Drawer,
  Tabs,
  Tab,
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "./ConnectDrawer.css";

const ConnectDrawer = ({ open, onClose }) => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Drawer anchor="bottom" open={open} onClose={onClose}>
      <Box
        className="connect-drawer-content"
        sx={{
          width: "100%",
          maxWidth: 400,
          margin: "auto",
          color: "white",
          p: 3,
        }}
      >
        <Box sx={{ display: "flex", gap: 2, mb: 2, justifyContent: "center" }}>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon sx={{ color: "white", fontSize: 40 }} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon sx={{ color: "white", fontSize: 40 }} />
          </a>
        </Box>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          centered
          sx={{
            "& .MuiTab-root": { color: "white", fontWeight: "bold" },
            "& .Mui-selected": { color: "#f0bb0d" },
            "& .MuiTabs-indicator": { backgroundColor: "#f0bb0d" },
          }}
        >
          <Tab label="Quick Connect" />
          <Tab label="Fill a Form" />
        </Tabs>
        {tabValue === 0 && (
          <Box sx={{ p: 3, textAlign: "center" }}>
            <Box
              component="a"
              href="mailto:test@gmail.com"
              sx={{
                textDecoration: "none",
                bgcolor: "#F3ECD2",
                borderRadius: 2,
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                border: "2px solid #222",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                  transform: "translateY(-1.2px)",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
                  cursor: "pointer",
                },
                overflow: "hidden", // for rounded corners on top section
              }}
            >
              {/* Top Section with icon and label */}
              <Box
                sx={{
                  bgcolor: "#f97028",
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  p: 2,
                  borderBottom: "2px solid rgba(255,255,255,0.3)",
                }}
              >
                <EmailIcon sx={{ color: "white" }} />
                <Typography
                  variant="h6"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  Email
                </Typography>
              </Box>

              {/* Email Address and Note */}
              <Box sx={{ p: 2, textAlign: "center" }}>
                <Typography sx={{ fontWeight: "bold", color: "#000" }}>
                  test@gmail.com
                </Typography>
                <Typography sx={{ mt: 1, color: "#333" }}>
                  Send me an email directly
                </Typography>
              </Box>
            </Box>
          </Box>
        )}
        {tabValue === 1 && (
          <Box sx={{ p: 3 }}>
            <form
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                InputLabelProps={{ style: { color: "white" } }}
                InputProps={{
                  style: { color: "white", borderColor: "#f0bb0d" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#f0bb0d" },
                    "&:hover fieldset": { borderColor: "#f489a3" },
                  },
                }}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                InputLabelProps={{ style: { color: "white" } }}
                InputProps={{
                  style: { color: "white", borderColor: "#f0bb0d" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#f0bb0d" },
                    "&:hover fieldset": { borderColor: "#f489a3" },
                  },
                }}
              />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                InputLabelProps={{ style: { color: "white" } }}
                InputProps={{
                  style: { color: "white", borderColor: "#f0bb0d" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#f0bb0d" },
                    "&:hover fieldset": { borderColor: "#f489a3" },
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#f97028",
                  color: "white",
                  "&:hover": { bgcolor: "#f489a3" },
                }}
              >
                Submit
              </Button>
            </form>
          </Box>
        )}
      </Box>
    </Drawer>
  );
};

export default ConnectDrawer;
