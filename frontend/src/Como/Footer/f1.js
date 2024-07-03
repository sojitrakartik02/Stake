import * as React from "react";
import {
  Box,
  Grid,
  Link as MuiLink,
  Typography,
  Container,
} from "@mui/material";

import LaunchIcon from "@mui/icons-material/Launch";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#071D21",
        color: "white",
        py: 3,
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          sx={{ borderBottom: "1px solid green", paddingBottom: "30px" }}
          container
          spacing={2}
          justifyContent="space-around"
        >
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h6" gutterBottom>
              Sport
            </Typography>
            <MuiLink
              sx={{
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
              href="#"
              display="block"
            >
              Sportsbook
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
              display="block"
            >
              Live Sports
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
              display="block"
            >
              Basketball
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
              display="block"
            >
              Tennis
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
              display="block"
            >
              eSports
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
              display="block"
            >
              Bet Bonuses
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
              display="block"
            >
              Sports Rules
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
              display="block"
            >
              Racing Rules
            </MuiLink>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" gutterBottom>
              Casino
            </Typography>
            <MuiLink
              href="#"
              sx={{
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
              display="block"
            >
              Casino Games
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
              display="block"
            >
              Slots
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
              display="block"
            >
              Live Casino
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
              display="block"
            >
              Roulette
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
              display="block"
            >
              Blackjack
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
              display="block"
            >
              Providers
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
              display="block"
            >
              VIP Club
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
              display="block"
            >
              Promotion
            </MuiLink>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h6" gutterBottom>
              Supports
            </Typography>
            <MuiLink
              href="#"
              sx={{
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
              display="block"
            >
              Sportsbook
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
              display="block"
            >
              Live Sports
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
              display="block"
            >
              Basketball
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
              display="block"
            >
              Tennis
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
              display="block"
            >
              eSports
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
              display="block"
            >
              Bet Bonuses
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
              display="block"
            >
              Sports Rules
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
              display="block"
            >
              Racing Rules
            </MuiLink>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h6" gutterBottom>
              Community
            </Typography>
            <MuiLink
              href="#"
              display="block"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
            >
              <span>Blog</span>
              <LaunchIcon sx={{ mr: 1, width: "23px", height: "15px" }} />
            </MuiLink>
            <MuiLink
              href="#"
              display="block"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
            >
              <span>Forum</span>
              <LaunchIcon sx={{ mr: 1, width: "23px", height: "15px" }} />
            </MuiLink>
            <MuiLink
              href="#"
              display="block"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
            >
              <span>Facebook</span>
              <LaunchIcon sx={{ mr: 1, width: "23px", height: "15px" }} />
            </MuiLink>
            <MuiLink
              href="#"
              display="block"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
            >
              <span>Twitter</span>
              <LaunchIcon sx={{ mr: 1, width: "23px", height: "15px" }} />
            </MuiLink>
            <MuiLink
              href="#"
              display="block"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
            >
              <span>Instagram</span>
              <LaunchIcon sx={{ mr: 1, width: "23px", height: "15px" }} />
            </MuiLink>
            <MuiLink
              href="#"
              display="block"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
            >
              <span>Youtube</span>
              <LaunchIcon sx={{ mr: 1, width: "23px", height: "15px" }} />
            </MuiLink>
            <MuiLink
              href="#"
              display="block"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
            >
              <span>Shop</span>
              <LaunchIcon sx={{ mr: 1, width: "23px", height: "15px" }} />
            </MuiLink>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <MuiLink
              href="#"
              sx={{
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
              display="block"
            >
              Private Policy
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
              display="block"
            >
              Licenses
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
              display="block"
            >
              AML Policy
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
              display="block"
            >
              Terms of Service
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
              display="block"
            >
              Self Exclusion
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
              display="block"
            >
              Primedice
            </MuiLink>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h6" gutterBottom>
              Language
            </Typography>
            <MuiLink
              href="#"
              sx={{
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
              display="block"
            >
              English Dropdown
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
              display="block"
            >
              Odds
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: "rgba(177,186,211)",
                textDecoration: "none",
                "&:hover": { color: "white" },
                padding: "3px 0px",
              }}
              display="block"
            >
              Decimal
            </MuiLink>
          </Grid>
        </Grid>

        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ pt: 4 }}
        >
          © 2024 Company Co. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
