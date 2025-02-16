import { Box, Typography, FormControl, NativeSelect } from "@mui/material";
import React, { useState } from "react";
import "../../App.css";
import { MarginTwoTone } from "@mui/icons-material";
const MyBets = () => {
  const [selectedOption, setSelectedOption] = useState("Active");
  const MyBetsIcon = () => (
    <svg
      fill="currentColor"
      viewBox="0 0 64 64"
      style={{ marginRight: "0.5rem", width: "16px", height: "16px" }}
    >
      <path d="M.001 3.549v7.12h7.12v49.786h6.214c.778-3.122 3.556-5.398 6.866-5.398a7.07 7.07 0 0 1 6.856 5.348l.01.048h9.974c.778-3.122 3.556-5.398 6.866-5.398a7.07 7.07 0 0 1 6.856 5.348l.01.048h6.16V10.665h7.066v-7.12L.001 3.549Zm35.546 37.334h-17.76v-5.334h17.76v5.334Zm10.668-14.214H17.789v-5.334h28.426v5.334Z"></path>
    </svg>
  );
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Box>
      <Box>
        <Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "max-content",
                height: "40px",
                borderRadius: "50px",
                cursor: "pointer",
                color: "white",
              }}
            >
              <MyBetsIcon />
              <p>My Bets</p>
            </Box>
            <Box
              sx={{
                color: "white",
                background: "rgba(15,33,46,1)",
              }}
            >
              <FormControl sx={{ color: "white", width: "110px" }}>
                <NativeSelect
                  value={selectedOption}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "Without label" }}
                  sx={{
                    "& select": {
                      color: "white",
                      backgroundColor: " rgba(15,33,46,1)",
                      padding: "10px",
                    },
                    "& option": {
                      color: "black",
                      backgroundColor: "white",
                    },
                    "&:before": {
                      borderColor: "white",
                    },
                    "&:after": {
                      borderColor: "white",
                    },
                  }}
                >
                  <option value="Active">Active</option>
                  <option value="Settled">Settled</option>
                </NativeSelect>
              </FormControl>
            </Box>
          </Box>
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Box>
            <svg
              width={"80px"}
              height={"80px"}
              viewBox="0 0 80 80"
              fill="none"
              style={{ marginBottom: "30px" }}
            >
              <path
                d="M23.7401 25.1095H16.4071V21.6539C16.4071 20.4152 23.7401 20.4152 23.7401 21.6539V25.1095Z"
                fill="#69E244"
              ></path>
              <path
                d="M63.8036 24.3578H16.1963C12.0405 24.3578 8.67151 27.7259 8.67151 31.8807C8.67151 36.0355 12.0405 39.4036 16.1963 39.4036H63.8036C67.9594 39.4036 71.3284 36.0355 71.3284 31.8807C71.3284 27.7259 67.9594 24.3578 63.8036 24.3578Z"
                fill="#263742"
              ></path>
              <path
                d="M63.8419 29.4741H16.1617C14.8315 29.4741 13.7532 30.5515 13.7532 31.8807C13.7532 33.2098 14.8315 34.2873 16.1617 34.2873H63.8419C65.1721 34.2873 66.2504 33.2098 66.2504 31.8807C66.2504 30.5515 65.1721 29.4741 63.8419 29.4741Z"
                fill="#0C1D29"
              ></path>
              <path
                d="M63.5963 77.4917V31.5643H16.4071V77.4917C17.7916 77.4917 18.9154 78.6155 18.9154 80H23.3374C23.3374 78.6155 24.4612 77.4917 25.8457 77.4917C27.2302 77.4917 28.354 78.6155 28.354 80H32.7761C32.7761 78.6155 33.8998 77.4917 35.2843 77.4917C36.6689 77.4917 37.7926 78.6155 37.7926 80H42.2147C42.2147 78.6155 43.3384 77.4917 44.7229 77.4917C46.1075 77.4917 47.2312 78.6155 47.2312 80H51.6533C51.6533 78.6155 52.777 77.4917 54.1615 77.4917C55.5461 77.4917 56.6698 78.6155 56.6698 80H61.0919C61.0919 78.6155 62.2156 77.4917 63.6002 77.4917H63.5963Z"
                fill="#334552"
              ></path>
              <path
                d="M32.2509 24.354C38.976 24.354 44.4278 18.9022 44.4278 12.177C44.4278 5.45183 38.976 0 32.2509 0C25.5257 0 20.0739 5.45183 20.0739 12.177C20.0739 18.9022 25.5257 24.354 32.2509 24.354Z"
                fill="#263742"
              ></path>
              <path
                d="M23.8704 3.34824C22.8233 4.34157 21.9489 5.52284 21.3046 6.84984L24.2999 4.61388L23.8704 3.34824Z"
                fill="#3C8725"
              ></path>
              <path
                d="M29.3356 8.18066L27.6135 13.7111L32.3463 17.0593L36.9908 13.5961L35.1307 8.10779L29.3356 8.18066Z"
                fill="#0C1D29"
              ></path>
              <path
                d="M43.369 17.1437L42.0266 17.159L40.9182 20.722C41.9307 19.698 42.7668 18.4937 43.369 17.1437Z"
                fill="#0C1D29"
              ></path>
              <path
                d="M41.9882 10.8807L44.3507 10.85C44.0861 8.41461 43.0889 6.15179 41.5548 4.3262L40.1281 5.38857L41.9882 10.8769V10.8807Z"
                fill="#0C1D29"
              ></path>
              <path
                d="M35.0924 1.82945L35.5219 0.452581C35.1 0.333688 34.6705 0.237806 34.2256 0.164936C32.3578 -0.141886 30.5207 -0.0076516 28.8179 0.494769L29.2934 1.90232L35.0885 1.82945H35.0924Z"
                fill="#0C1D29"
              ></path>
              <path
                d="M21.8223 13.4541L20.1425 13.4733C20.3879 15.7745 21.2854 17.9222 22.6737 19.6941L23.6824 18.9424L21.8223 13.4541Z"
                fill="#3C8725"
              ></path>
              <path
                d="M28.7218 22.5092L28.3459 23.7097C28.9634 23.9168 29.6078 24.0817 30.2751 24.1929C31.9166 24.4614 33.5312 24.3885 35.0538 24.028L34.5131 22.4364L28.718 22.5092H28.7218Z"
                fill="#3C8725"
              ></path>
              <path
                d="M54.1156 18.9041C54.1156 20.4305 53.4904 21.8074 52.4818 22.793C52.2401 23.0346 51.9755 23.2494 51.6917 23.4374C50.8249 24.0165 49.7856 24.354 48.6657 24.354C46.8784 24.354 45.2906 23.4949 44.3011 22.1679C44.1401 21.9569 43.9981 21.7383 43.8754 21.5082C43.4497 20.7335 43.2119 19.8475 43.2119 18.9041C43.2119 17.9606 43.4497 17.0746 43.8754 16.2999C43.9981 16.0698 44.1401 15.8512 44.3011 15.6402C45.2906 14.3132 46.8784 13.4541 48.6657 13.4541C49.7856 13.4541 50.8249 13.7916 51.6917 14.3708C51.9755 14.5587 52.2401 14.7735 52.4818 15.0151C53.4904 16.0008 54.1156 17.3776 54.1156 18.9041Z"
                fill="#334552"
              ></path>
              <path
                d="M49.3791 20.7258H49.5248V19.9588H49.0761C49.0147 19.7401 48.9687 19.5177 48.9457 19.2876H49.3676V18.5205H48.9457C48.9687 18.2904 49.0147 18.068 49.0761 17.8494H49.5248V17.0823H49.3791C49.9812 15.9432 51.1356 15.134 52.4818 15.0151C52.2402 14.7735 51.9755 14.5587 51.6917 14.3708C50.265 14.7313 49.0952 15.7476 48.5276 17.0823H47.8795V17.8494H48.2822C48.2323 18.068 48.1978 18.2904 48.1786 18.5205H47.7184V19.2876H48.1786C48.1978 19.5177 48.2323 19.7401 48.2822 19.9588H47.8795V20.7258H48.5276C49.0952 22.0605 50.265 23.0768 51.6917 23.4373C51.9755 23.2494 52.2402 23.0346 52.4818 22.793C51.1356 22.6741 49.9812 21.8649 49.3791 20.7258Z"
                fill="#263742"
              ></path>
              <path
                d="M46.0078 19.2876V18.5206H45.6204C45.6012 18.2904 45.5629 18.068 45.513 17.8494H45.8467V17.0823H45.2676C45.0374 16.5415 44.7076 16.0506 44.3011 15.6403C44.14 15.8512 43.9981 16.0698 43.8754 16.2999C44.0863 16.5339 44.2704 16.7985 44.42 17.0823H44.2014V17.8494H44.723C44.7843 18.068 44.8303 18.2904 44.8534 18.5206H44.3624V19.2876H44.8534C44.8303 19.5177 44.7843 19.7402 44.723 19.9588H44.2014V20.7258H44.42C44.2704 21.0096 44.0863 21.2743 43.8754 21.5082C43.9981 21.7383 44.14 21.957 44.3011 22.1679C44.7076 21.7575 45.0374 21.2666 45.2676 20.7258H45.8467V19.9588H45.513C45.5629 19.7402 45.6012 19.5177 45.6204 19.2876H46.0078Z"
                fill="#263742"
              ></path>
            </svg>
            <p
              style={{
                color: "#B1BAD3",
                margin: "4px 0 0",
                fontSize: "14px ",
              }}
            >
              No Active Bets
            </p>
            <p
              style={{ color: "white", margin: "4px 0 0", fontSize: "14px  " }}
            >
              Start Betting Now!
            </p>
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default MyBets;

// rgba(15,33,46,1)
