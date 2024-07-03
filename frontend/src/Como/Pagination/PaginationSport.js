import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import a2 from "./images/a2.jpg";
import a1 from "./images/a1.png";
import a3 from "./images/a3.jpg";
import a4 from "./images/a4.png";
import a5 from "./images/a5.png";
import a6 from "./images/a6.png";
import a7 from "./images/a7.png";
import a8 from "./images/a8.png";
import a9 from "./images/a9.jpg";
import { Navigate, useNavigate } from "react-router-dom";

export const cardData = [
  {
    id: 1,
    title: "Alex Pereira",
    description: "Double Winnings For 1st Round Finish. ",
    more: "Read More",
    image: `${a1}`,
    promo: "Promo",
    rule1:
      "The Euros bring Europe's top national teams together to vie for glory.",
    rule2:
      "Held every four years, it offers unforgettable matches, stunning goals, and electrifying fan energy, making it one of football's most eagerly anticipated events.",
    rule2:
      "For all matches during the Euros, back any country in the 1x2 market. If they score a goal in the first 15 minutes but don’t go on to win the match, you’ll still be paid out as a winner, up to $100!",
  },
  {
    id: 2,
    title: "Euro 2024",
    description: "Early Goal, You Win! ",
    more: "Read More",
    image: `${a2}`,
    promo: "Promo",
    rule1:
      "The Euros bring Europe's top national teams together to vie for glory.",
    rule2:
      "Held every four years, it offers unforgettable matches, stunning goals, and electrifying fan energy, making it one of football's most eagerly anticipated events.",
    rule3:
      "For all matches during the Euros, back any country in the 1x2 market. If they score a goal in the first 15 minutes but don’t go on to win the match, you’ll still be paid out as a winner, up to $100!",
  },
  {
    id: 3,
    title: "Euro 2024",
    description: "Injury Time Winner Bonus! ",
    more: "Read More",
    image: `${a3}`,
    promo: "Promo",
    rule1:
      "The Euros frequently see extended injury time, adding to the suspense and excitement of the tournament.",
    rule2:
      "These tense final minutes often lead to dramatic, last-gasp goals, changing the course of matches and leaving fans on the edge of their seats.",
    rule3:
      "For all Euro matches, back any country in the 1x2 market and if your team scores a match-winning goal in second-half injury time, you'll receive double winnings, up to $100!",
  },
  {
    id: 4,
    title: "Copa America ",
    description: "Early Goal, You Win! ",
    more: "Read More",
    image: `${a4}`,
    promo: "Promo",
    rule1:
      "This year's upcoming Copa America, in the United States, will be historic as it includes nations from North America alongside South American ones.",
    rule2:
      "This unique format promises thrilling matches, showcasing top football talent and fostering continental rivalries, making it a highly anticipated global event.",
    rule3:
      "For all matches during the Copa America, back any country in the 1x2 market. If they score a goal in the first 15 minutes but don’t go on to win the match, you’ll still be paid out as a winner, up to $100!",
  },
  {
    id: 5,
    title: "Copa America ",
    description: "Injury Time Winner Bonus! ",
    more: "Read More",
    image: `${a5}`,
    promo: "Promo",
    rule1:
      "The Euros bring Europe's top national teams together to vie for glory.",
    rule2:
      "Held every four years, it offers unforgettable matches, stunning goals, and electrifying fan energy, making it one of football's most eagerly anticipated events.",
    rule3:
      "For all matches during the Euros, back any country in the 1x2 market. If they score a goal in the first 15 minutes but don’t go on to win the match, you’ll still be paid out as a winner, up to $100!",
  },
  {
    id: 6,
    title: "Split Decision  ",
    description: "Insurance For Every UFC Fight. ",
    more: "Read More",
    image: `${a6}`,
    promo: "Promo",
    rule1:
      "The Euros bring Europe's top national teams together to vie for glory.",
    rule2:
      "Held every four years, it offers unforgettable matches, stunning goals, and electrifying fan energy, making it one of football's most eagerly anticipated events.",
    rule3:
      "For all matches during the Euros, back any country in the 1x2 market. If they score a goal in the first 15 minutes but don’t go on to win the match, you’ll still be paid out as a winner, up to $100!",
  },
  {
    id: 7,
    title: "Split Decision  ",
    description: "Insurance For Every UFC Fight. ",
    more: "Read More",
    image: `${a7}`,
    promo: "Promo",
    rule1:
      "The Euros bring Europe's top national teams together to vie for glory.",
    rule2:
      "Held every four years, it offers unforgettable matches, stunning goals, and electrifying fan energy, making it one of football's most eagerly anticipated events.",
    rule3:
      "For all matches during the Euros, back any country in the 1x2 market. If they score a goal in the first 15 minutes but don’t go on to win the match, you’ll still be paid out as a winner, up to $100!",
  },
  {
    id: 8,
    title: "Wimbledon",
    description: "Take on Sinner, Djokovic and Alcaraz. ",
    more: "Read More",
    image: `${a8}`,
    promo: "Promo",
    rule1:
      "The Euros bring Europe's top national teams together to vie for glory.",
    rule2:
      "Held every four years, it offers unforgettable matches, stunning goals, and electrifying fan energy, making it one of football's most eagerly anticipated events.",
    rule3:
      "For all matches during the Euros, back any country in the 1x2 market. If they score a goal in the first 15 minutes but don’t go on to win the match, you’ll still be paid out as a winner, up to $100!",
  },
  {
    id: 9,
    title: "Wimbledon",
    description: "Bagel Finish Double Winnings. ",
    more: "Read More",
    image: `${a9}`,
    promo: "Promo",
    rule1:
      "The Euros bring Europe's top national teams together to vie for glory.",
    rule2:
      "Held every four years, it offers unforgettable matches, stunning goals, and electrifying fan energy, making it one of football's most eagerly anticipated events.",
    rule3:
      "For all matches during the Euros, back any country in the 1x2 market. If they score a goal in the first 15 minutes but don’t go on to win the match, you’ll still be paid out as a winner, up to $100!",
  },
];

const PaginationSport = () => {
  const [page, setPage] = React.useState(1);
  const itemsPerPage = 3;

  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const selectedItems = cardData.slice(startIndex, startIndex + itemsPerPage);
  const navigate = useNavigate();
  return (
    <Container
      sx={{
        // background: "#D5DCEB",
        // background:"#213743",

        marginTop: "20px",
        padding: "0px !important",
      }}
      spacing={2}
      alignItems="center"
    >
      <Box display="flex" alignItems="center" sx={{ marginLeft: "-13px " }}>
        <Button
          size="small"
          sx={{ display: "contents" }}
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          <KeyboardArrowLeftIcon sx={{ color: "white" }} />
        </Button>
        <Stack direction="row" spacing={2} justifyContent="center">
          {selectedItems.map((item) => (
            <Card
              onClick={() => navigate(`/card/${item.id}`)}
              key={item.id}
              sx={{
                width: "365px",

                height: "240px",
                display: "flex",
                background: "#071D21",
                color: "white",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  background: "#213743",
                  flexDirection: "column",
                  padding: "20px 14px",
                  height: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    color: "rgba(177,186,211)",
                    background: "white",
                    width: "3rem",
                    fontSize: "12px",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "3px",
                  }}
                  variant="subtitle2"
                  color="text.secondary"
                >
                  <p
                    style={{
                      margin: "0",
                      textAlign: "center",
                    }}
                  >
                    {item.promo}
                  </p>
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontSize: "18px", marginTop: "8%" }}
                >
                  <p style={{ margin: "0px", justifyContent: "center" }}>
                    {item.title}
                  </p>
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginTop: "8%" }}
                >
                  <p
                    style={{
                      fontSize: "12px",
                      margin: "0px",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    {item.description}
                    {item.more}
                  </p>
                </Typography>
                <Button
                  size="small"
                  sx={{
                    border: "1px solid white",
                    color: "white",
                    marginTop: "35%",
                    width: "120px",
                  }}
                >
                  <p style={{ margin: "0", padding: "5px" }}>Bet Now</p>
                </Button>
              </Box>
              <CardMedia
                component="img"
                sx={{ height: "240px", width: "190px", objectFit: "cover" }}
                image={item.image}
                title={item.title}
              />
            </Card>
          ))}
        </Stack>
        <Button
          size="small"
          sx={{ display: "contents" }}
          disabled={page === Math.ceil(cardData.length / itemsPerPage)}
          onClick={() => setPage(page + 1)}
        >
          <KeyboardArrowRightIcon sx={{ color: "white" }} />
        </Button>
      </Box>
      <Pagination
        count={Math.ceil(cardData.length / itemsPerPage)}
        page={page}
        onChange={handleChange}
        sx={{ display: "none" }}
      />
    </Container>
  );
};

export default PaginationSport;
