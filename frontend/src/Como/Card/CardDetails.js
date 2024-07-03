import React from "react";
import { useParams } from "react-router-dom";
import { cardData } from "../Pagination/PaginationSport"; // Adjust the path as needed
import { Container, Box, Typography } from "@mui/material";

const CardDetail = () => {
  const { id } = useParams();
  const card = cardData.find((item) => item.id === parseInt(id));

  return (
    <Container sx={{ textAlign: "center", marginTop: "50px" }}>
      {card ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            style={{ borderRadius: "10px" }}
            width={"650px"}
            height={"348px"}
            src={card.image}
            alt={card.title}
          />
          <Box
            sx={{
              width: "650px",
              textAlign: "left",
              padding: "0 15px",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: "28px",
                color: "white",
                fontWeight: "800",
                margin: "20px 0",
              }}
            >
              {card.title}-{card.description}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "18px",
                color: "#B1BAD3",
                fontWeight: "500",
                margin: "20px 0 ",
              }}
            >
              {card.rule1}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "18px",
                color: "#B1BAD3",
                fontWeight: "500",
                margin: "20px 0 ",
              }}
            >
              {card.rule2}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "18px",
                color: "#B1BAD3",
                fontWeight: "500",
                margin: "20px 0 ",
              }}
            >
              {card.rule3}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "650px",
              textAlign: "left",
              padding: "0 15px",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: "28px",
                color: "white",
                fontWeight: "800",
                margin: "20px 0",
              }}
            >
              Terms and Conditions
            </Typography>
          </Box>
        </Box>
      ) : (
        <Typography variant="h6">Card not found</Typography>
      )}
    </Container>
  );
};

export default CardDetail;
