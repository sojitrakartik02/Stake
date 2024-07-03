import React, { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { Box, InputBase, styled, Container } from "@mui/material";
import PaginationSport from "../Pagination/PaginationSport";
import SearchIcon from "@mui/icons-material/Search";
import Main from "../Main/Main";
import Lobby from "../Lobby/Lobby";
import MyBets from "../Lobby/MyBets.js";
import Favorites from "../Lobby/Favourites.js";
import StartingSoon from "../Lobby/StartingSoon.js";

const Home = () => {
  const { isDrawerOpen, handleDrawerClose, handleDrawerOpen } = useAuth();
  const [activeSection, setActiveSection] = useState(null);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "50px",
    width: "100%",
    transition: theme.transitions.create("border, border-radius"),
    "&:hover": {
      border: "2px solid #557086",
      borderRadius: "50px",
    },
    width: "99.5%",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(5)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "18ch",
      },
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    borderRadius: "2px",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };
  // sx={{ background: "#1a2c38" }}
  return (
    <Container>
      <Box sx={{ zIndex: "1000 !important", background: "#1a2c38" }}>
        <PaginationSport />
        <Box
          sx={{
            margin: "30px 0",
            borderRadius: "50px",
            backgroundColor: "#0F212E",
            color: "#fff",
            padding: "0px",
            width: "100%",
          }}
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              sx={{ fontSize: "14px" }}
              placeholder="Search your event"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>
        <Main onSectionChange={handleSectionChange} />
        {activeSection === "lobby" && <Lobby />}
        {activeSection === "my-bets" && <MyBets />}
        {activeSection === "favourites" && <Favorites />}
        {activeSection === "starting-soon" && <StartingSoon />}
      </Box>
    </Container>
  );
};

export default Home;
