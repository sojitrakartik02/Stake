import { Box, Button, Typography } from "@mui/material";
import React from "react";
import walletImage from "./Images/wallet.webp";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CloseIcon from "@mui/icons-material/Close";
const WalletOverlay = ({ onClose }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <Box
        sx={{
          backgroundColor: "#1a2c38",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "35%",
          Height: "100%",
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "white",
              fontWeight: "500",
            }}
          >
            <AccountBalanceWalletIcon
              sx={{ fontSize: 28, marginRight: "3px" }}
            />
            <Typography variant="h6">Wallet</Typography>
          </Box>

          <Button variant="text" onClick={onClose}>
            <CloseIcon sx={{ color: "white" }} />
          </Button>
        </Box>

        {/* Image Section */}
        <img src={walletImage} alt="Wallet" style={{ width: "100%" }} />
        <Box sx={{ fontSize: "22px", fontWeight: "800" }}>
          <p style={{ margin: "10px 0", color: "white" }}>
            Your Stake wallet is currently empty.
          </p>
        </Box>
        <Box sx={{ color: "#B1BAD3" }}>
          <p style={{ margin: "0px" }}>
            Make a deposit via crypto or local currency if it's available in
            your region. Alternatively, you can buy crypto via Moonpay.
          </p>
        </Box>
        {/* Buttons Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "50px",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "calc(50% - 10px)" }}
          >
            Deposit
          </Button>
          <Button
            sx={{
              width: "calc(50% - 10px)",
              background: "rgba(47,69,83)",
              fontWeight: "500",
              color: "white",
              "&:hover": {
                background: "rgba(47,69,83)",
              },
            }}
          >
            Buy Crypto
          </Button>
        </Box>
        <Box
          sx={{
            background: "#0f212e",
            marginTop: "20px",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <p style={{ color: "#B1BAD3" }}>
              Improve your account security with Two-Factor Authentication
            </p>
          </Box>
          <Box>
            <Button
              sx={{
                width: "100%",
                background: "rgba(47,69,83)",
                fontWeight: "500",
                color: "white",
                "&:hover": {
                  background: "rgba(47,69,83)",
                },
              }}
            >
              Enable 2FA
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WalletOverlay;
