import React, { useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import baseball from "./images/baseball.png";
import basketball from "./images/basketball.png";
import counterstrike from "./images/counter-strike.png";
import cricket from "./images/cricket.png";
import darts from "./images/darts.png";
import dota from "./images/dota-2.png";
import leagueoflegends from "./images/league-of-legends.png";
import mma from "./images/mma.png";
import tennis from "./images/tennis.png";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const imagesData = [
  { id: 1, image: baseball },
  { id: 2, image: basketball },
  { id: 3, image: counterstrike },
  { id: 4, image: cricket },
  { id: 5, image: darts },
  { id: 6, image: dota },
  { id: 7, image: leagueoflegends },
  { id: 8, image: mma },
  { id: 9, image: tennis },
];

const itemsPerPage = 7;
const imageWidth = 137;
const imageHeight = 200;

const Lobby = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(imagesData.length / itemsPerPage);
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const getPaginatedImages = () => {
    const totalPages = Math.ceil(imagesData.length / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    if (endIndex >= imagesData.length && imagesData.length - startIndex === 2) {
      const start = Math.max(0, startIndex - (itemsPerPage - 2));
      return imagesData.slice(start, endIndex);
    }

    return imagesData.slice(startIndex, endIndex);
  };

  const paginatedImages = getPaginatedImages();

  return (
    <Box>
      <Container sx={{ padding: "0px !important" }}>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "0px",
            "&:hover": { color: "black" },
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "0px",
              "&:hover": { color: "black" },
            }}
          >
            <SportsBaseballIcon
              sx={{
                width: "25px",
                height: "25px",
                marginRight: "8px",
                cursor: "pointer",
                color: "#B1BAD3",
                "&:hover": { color: "black" },
              }}
            />
            <p
              style={{
                fontSize: "18px",
                fontWeight: "800",
                color: "#B1BAD3",
                transition: "color 0.3s",
                cursor: "pointer",
              }}
              onMouseOver={(e) => (e.target.style.color = "black")}
              onMouseOut={(e) => (e.target.style.color = "#B1BAD3")}
            >
              Top Sports
            </p>
          </Box>
          <Box
            sx={{
              border: "1px solid #2f4553",
              borderRadius: "30px",
              justifyContent: "space-around",
              alignItems: "center",
              display: "flex",
              textAlign: "center",
              width: "100px",
              height: "33px",
              position: "relative",
            }}
          >
            <Button
              size="small"
              sx={{ display: "contents" }}
              disabled={page === 1}
              onClick={handlePrevPage}
            >
              <ArrowBackIcon />
            </Button>

            <Box
              sx={{
                width: "1px",
                height: "100%",
                backgroundColor: "#2f4553",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />

            <Button
              size="small"
              sx={{ display: "contents" }}
              disabled={page === Math.ceil(imagesData.length / itemsPerPage)}
              onClick={handleNextPage}
            >
              <ArrowForwardIcon />
            </Button>
          </Box>
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginTop: "-8px",
          }}
        >
          {paginatedImages.map((item) => (
            <Box
              key={item.id}
              sx={{
                position: "relative",
                width: "150px",
                height: imageHeight + "px",
                overflow: "hidden",
                transition: "transform 0.3s ease-out",
                "&:hover": {
                  transform: "translateY(-10px)",
                },
              }}
            >
              <img
                src={item.image}
                alt={`Image ${item.id}`}
                style={{
                  width: imageWidth + "px",
                  height: imageHeight + "px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <Typography
                sx={{
                  position: "absolute",
                  top: "16px",
                  left: "-3px",

                  color: "#fff",

                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    justifyContent: "center",
                    padding: "0.5rem",
                    background: "#2f4553",
                    width: "12px",
                    display: "flex",
                    fontWeight: "700",
                    lineHeight: "120%",
                    color: "#fff",
                    borderTopRightRadius: "8px",
                    borderBottomRightRadius: "8px",
                  }}
                >
                  {item.id}
                </div>
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Lobby;
