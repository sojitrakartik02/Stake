import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import GradeIcon from "@mui/icons-material/Grade";
import { useNavigate } from "react-router-dom";

const Main = ({ onSectionChange }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const handleClick = (path, section, index) => {
    setSelectedIndex(index);
    if (path) {
      navigate(path);
    }
    if (section) {
      onSectionChange(section);
    }
  };

  const MyBetsIcon = () => (
    <svg
      fill="currentColor"
      viewBox="0 0 64 64"
      style={{ marginRight: "0.5rem", width: "16px", height: "16px" }}
    >
      <path d="M.001 3.549v7.12h7.12v49.786h6.214c.778-3.122 3.556-5.398 6.866-5.398a7.07 7.07 0 0 1 6.856 5.348l.01.048h9.974c.778-3.122 3.556-5.398 6.866-5.398a7.07 7.07 0 0 1 6.856 5.348l.01.048h6.16V10.665h7.066v-7.12L.001 3.549Zm35.546 37.334h-17.76v-5.334h17.76v5.334Zm10.668-14.214H17.789v-5.334h28.426v5.334Z"></path>
    </svg>
  );
  const items = [
    {
      text: "Lobby",
      icon: (
        <SportsBaseballIcon
          sx={{ width: "15px", height: "15px", marginRight: "6px" }}
        />
      ),
      section: "lobby",
    },
    {
      text: "My Bets",
      icon: (
        <MyBetsIcon
          sx={{ width: "15px", height: "15px", marginRight: "6px" }}
        />
      ),
      section: "my-bets",
    },
    {
      text: "Favourites",
      icon: (
        <GradeIcon sx={{ width: "15px", height: "15px", marginRight: "6px" }} />
      ),
      section: "favourites",
    },
    {
      text: "Starting Soon",
      icon: (
        <AccessTimeIcon
          sx={{ width: "15px", height: "15px", marginRight: "6px" }}
        />
      ),

      section: "starting-soon",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#0F212E",
        marginBottom: "30px",
        borderRadius: "50px",
        width: "40%",
        padding: "5px",
      }}
    >
      <Box
        sx={{
          color: "white",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {items.map((item, index) => (
          <Typography
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "max-content",
              height: "40px",
              borderRadius: "50px",
              padding: "0 10px",
              cursor: "pointer",
              backgroundColor:
                selectedIndex === index
                  ? "#2F4553"
                  : activeIndex === index
                  ? "#2F4553"
                  : "transparent",
              "&:hover": {
                backgroundColor: "#2F4553",
              },
            }}
            onClick={() => handleClick(item.path, item.section, index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {item.icon}
            <span>{item.text}</span>
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Main;
