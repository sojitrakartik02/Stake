import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const Notification = ({ onClose }) => {
  return (
    <Box
      sx={{
        padding: "0px 10px",
        flexDirection: "column",
        position: "fixed",
        top: "10.2%",
        right: "1%",
        backgroundColor: "rgba(0, 0, 0, 1)",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <Box
        sx={{
          display: "flex",

          justifyContent: "space-between",

          marginBottom: "20px",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <NotificationsNoneIcon sx={{ color: "white" }} />
          <Typography
            variant="h6"
            sx={{ color: "white", padding: "0px", margin: "0px" }}
          >
            Notifications
          </Typography>
        </Box>

        <Box>
          <Button variant="text" onClick={onClose}>
            <CloseIcon />
          </Button>
        </Box>
      </Box>

      <Box sx={{ textAlign: "center" }}>
        <svg
          width={"80px"}
          height={"80px"}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M70.4335 51.5259L68.4468 50.2228H49.414V57.1123L70.4335 51.5259Z"
            fill="#263742"
          >
            {" "}
          </path>
          <path
            d="M47.8647 56.2146V70.6773L65.1935 62.8354C68.3831 61.3909 70.4335 58.215 70.4335 54.7155V51.5305L47.8647 56.2192V56.2146Z"
            fill="#334552"
          ></path>
          <path
            d="M33.0331 75.7533V51.0793H46.9671V75.7533C46.9671 78.0954 45.0625 80 42.7204 80H37.2798C34.9377 80 33.0331 78.0954 33.0331 75.7533Z"
            fill="#263742"
          ></path>
          <path
            d="M29.5698 48.5504V71.8437C29.5698 76.6919 50.4299 76.6919 50.4299 71.8437V48.5504H29.5698Z"
            fill="#334552"
          ></path>
          <path
            d="M3.56552 11.6147L29.57 48.6461C29.57 54.0958 50.43 54.0958 50.43 48.6461L76.4345 11.6147H3.56552Z"
            fill="#263742"
          ></path>
          <path
            d="M76.4345 10.6032C76.4345 14.2166 70.2147 17.4107 60.7097 19.3245C57.6385 19.9442 54.2257 20.4272 50.5667 20.7507C49.6782 20.8282 48.7805 20.8965 47.8647 20.9512C45.3312 21.1152 42.702 21.2018 40 21.2018C37.2979 21.2018 34.6688 21.1152 32.1353 20.9512C31.2194 20.8965 30.3218 20.8282 29.4333 20.7507C25.7789 20.4272 22.3614 19.9442 19.2903 19.3199C9.78982 17.4107 3.56552 14.2166 3.56552 10.6032C3.56552 4.74796 19.8827 0 40 0C60.1173 0 76.4345 4.74796 76.4345 10.6032Z"
            fill="#334552"
          ></path>
          <path
            d="M47.8647 20.9512C45.3312 21.1152 42.702 21.2018 40 21.2018C37.2979 21.2018 34.6688 21.1152 32.1353 20.9512L32.7551 8.83525H47.2451L47.8647 20.9512Z"
            fill="#0C1D29"
          ></path>
          <path
            d="M39.9999 11.6147C44.0012 11.6147 47.2451 10.3703 47.2451 8.83525C47.2451 7.30017 44.0012 6.05566 39.9999 6.05566C35.9987 6.05566 32.7551 7.30017 32.7551 8.83525C32.7551 10.3703 35.9987 11.6147 39.9999 11.6147Z"
            fill="#3C8725"
          >
            {" "}
          </path>
          <path
            d="M40.0001 10.0336C42.8639 10.0336 45.1855 9.14212 45.1855 8.0424C45.1855 6.94267 42.8639 6.05117 40.0001 6.05117C37.1363 6.05117 34.8147 6.94267 34.8147 8.0424C34.8147 9.14212 37.1363 10.0336 40.0001 10.0336Z"
            fill="#0C1D29"
          ></path>
          <path
            d="M40 4.91201C38.5693 4.91201 37.4073 6.1514 37.4073 6.82578C37.4073 7.50015 38.5693 8.04694 40 8.04694C41.4308 8.04694 42.5927 7.50015 42.5927 6.82578C42.5927 6.1514 41.4308 4.91201 40 4.91201Z"
            fill="#69E244"
          ></path>
          <path
            d="M54.212 50.7695V49.7443L57.8801 49.7352L58.8734 50.1589V50.8424L54.9274 51.3801L54.212 50.7695Z"
            fill="#69E244"
          ></path>
        </svg>
      </Box>
      <Box
        sx={{
          fontSize: "14px",
          fontWeight: "800",
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        <p style={{ margin: "10px 0" }}>No Notifications Available</p>
      </Box>
      <Box sx={{ color: "#B1BAD3" }}>
        <p style={{ margin: "0px", textAlign: "center", marginBottom: "20px" }}>
          Your interactions will be visible here
        </p>
      </Box>
    </Box>
  );
};

export default Notification;
