import React, { useState } from "react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import {
  AppBar as MuiAppBar,
  Toolbar,
  Box,
  Drawer as MuiDrawer,
  Typography,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  Menu,
  Badge,
  InputBase,
  MenuItem,
  Button,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  AccountCircle,
  Notifications as NotificationsIcon,
  MailOutlined as MailOutlinedIcon,
  MoreVert as MoreIcon,
} from "@mui/icons-material";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { toast } from "react-toastify";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const AppBarWrapper = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: "#1D344F",
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const ToolbarWrapper = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  width: "auto",
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",

  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,

  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: "2px 5px",
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",

  alignItems: "center",
  justifyContent: "center",
}));

const SearchIconMain = styled("div")(({ theme }) => ({
  padding: "11px 10px",

  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.5, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const DropdownIndicator = styled("span")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 24,
  height: 24,
  borderRadius: "50%",
  backgroundColor: "#f5f5f5",
  fontSize: "1.2rem",
  textAlign: "center",
  lineHeight: "24px",
});

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  padding: theme.spacing(1, 2),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.08),
  },
}));

const currencyOptions = [
  { amount: 0.0, code: "INR", name: "Indian Rupee", icon: "₹" },
  { amount: 0.0, code: "BTC", name: "Bitcoin", icon: "₿" },
  { amount: 0.0, code: "ETH", name: "Ethereum", icon: "Ξ" },
  { amount: 0.0, code: "LTC", name: "Litecoin", icon: "Ł" },
  { amount: 0.0, code: "USDT", name: "Tether", icon: "₮" },
  { amount: 0.0, code: "DOGE", name: "Dogecoin", icon: "Ð" },
  { amount: 0.0, code: "BCH", name: "Bitcoin Cash", icon: "₿" },
  { amount: 0.0, code: "XRP", name: "Ripple", icon: "XRP" },
  { amount: 0.0, code: "EOS", name: "EOS", icon: "EOS" },
  { amount: 0.0, code: "TRS", name: "TRON", icon: "TRX" },
  { amount: 0.0, code: "BNB", name: "Binance Coin", icon: "BNB" },
  { amount: 0.0, code: "USDC", name: "USD Coin", icon: "$" },
];

const Navbar = ({ isDrawerOpen, handleDrawerOpen }) => {
  const theme = useTheme();

  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState(null);
  const [notiMenuAnchorEl, setNotiMenuAnchorEl] = useState(null);
  const [isNotiMenuOpen, setIsNotiMenuOpen] = useState(false);
  const [messageMenuAnchorEl, setMessageMenuAnchorEl] = useState(null);
  const [isMessageMenuOpen, setIsMessageMenuOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const { isLoggedIn, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
    setProfileMenuAnchorEl(false);
  };
  const handleClickWallet = () => {
    navigate("/wallet");
    console.log("Wallet");
  };
  const handleLogout = () => {
    logout();
    setSnackbarMessage("Logged out successfully");
    setSnackbarOpen(true);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
    setIsNotiMenuOpen(false);
    setIsMessageMenuOpen(false);
    setProfileMenuAnchorEl(false);
  };

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchorEl(null);
  };

  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchorEl(event.currentTarget);
  };

  const handleNotiMenuOpen = (event) => {
    setNotiMenuAnchorEl(event.currentTarget);
    setIsNotiMenuOpen(true);
  };

  const handleNotiMenuClose = () => {
    setNotiMenuAnchorEl(null);
    setIsNotiMenuOpen(false);
  };

  const handleMessageMenuOpen = (event) => {
    setMessageMenuAnchorEl(event.currentTarget);
    setIsMessageMenuOpen(true);
  };

  const handleMessageMenuClose = () => {
    setMessageMenuAnchorEl(null);
    setIsMessageMenuOpen(false);
  };

  const open = Boolean(mobileMoreAnchorEl);
  const menuId = "primary-search-account-menu-mobile";
  const profileMenuOpen = Boolean(profileMenuAnchorEl);
  const notiMenuOpen = Boolean(notiMenuAnchorEl);
  const messageMenuOpen = Boolean(messageMenuAnchorEl);

  const renderMessageMenu = (
    <Menu
      anchorEl={messageMenuAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id="message-menu"
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={messageMenuOpen}
      onClose={handleMessageMenuClose}
      sx={{ marginTop: "3.4rem" }}
    >
      <MenuItem onClick={() => console.log("Message 1 clicked")}>
        <Typography>Message 1</Typography>
      </MenuItem>
      <MenuItem onClick={() => console.log("Message 2 clicked")}>
        <Typography>Message 2</Typography>
      </MenuItem>
      <MenuItem onClick={() => console.log("Message 3 clicked")}>
        <Typography>Message 3</Typography>
      </MenuItem>
    </Menu>
  );

  const renderNotiMenu = (
    <Menu
      anchorEl={notiMenuAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id="notification-menu"
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={notiMenuOpen}
      onClose={handleNotiMenuClose}
      sx={{ marginTop: "3.4rem" }}
    >
      <MenuItem onClick={() => console.log("Notification clicked")}>
        <Typography>Notification 1</Typography>
      </MenuItem>
      <MenuItem onClick={() => console.log("Notification clicked")}>
        <Typography>Notification 2</Typography>
      </MenuItem>
      <MenuItem onClick={() => console.log("Notification clicked")}>
        <Typography>Notification 3</Typography>
      </MenuItem>
    </Menu>
  );

  const renderProfileMenu = (
    <Menu
      anchorEl={profileMenuAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id="profile-menu"
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={profileMenuOpen}
      onClose={handleProfileMenuClose}
      sx={{ marginTop: "3.4rem" }}
    >
      {isLoggedIn ? (
        <>
          <MenuItem onClick={handleClickWallet}>Wallet</MenuItem>

          <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </>
      ) : (
        <>
          <MenuItem onClick={handleClickWallet}>Wallet</MenuItem>
          <MenuItem onClick={handleLogin}>Login</MenuItem>
        </>
      )}
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      onClose={handleMobileMenuClose}
      sx={{
        marginTop: "3.5rem",

        borderRadius: "8px",
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
        minWidth: "220px",
      }}
    >
      <Box>
        <MenuItem onClick={handleMessageMenuOpen}>
          <IconButton size="large" color="inherit">
            <Badge badgeContent={4} color="error">
              <MailOutlinedIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem onClick={handleNotiMenuOpen}>
          <IconButton size="large" color="inherit">
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton size="large" edge="end" color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Box>
    </Menu>
  );

  return (
    <Box>
      <AppBarWrapper position="fixed" open={isDrawerOpen}>
        <ToolbarWrapper>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(isDrawerOpen && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box>
            <Typography variant="h6" noWrap component="div">
              <div>
                <a>
                  <svg
                    style={{ width: "67px", height: "33px", cursor: "pointer" }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 396.11 197.92"
                    onClick={() => navigate("/")}
                  >
                    <g>
                      <path
                        fill="currentColor"
                        d="M25.68,56.89c-.1-26.47,16.84-41.15,47.94-41.26C96,15.55,100,30.19,100,35.51c0,10.19-14.42,21-14.42,21s.8,6.35,13.18,6.3,24.44-8.22,24.37-28.67C123.07,10.65,98.46-.09,74.13,0,53.78.07-.19,2.93,0,56.51c.18,47.59,90,51.79,90.07,82.26.12,33.09-37,42-49.56,42S22.84,171.88,22.82,167c-.09-26.8,26.58-34.26,26.58-34.26,0-2-1.56-10.91-11.89-10.87C10.9,121.92.3,144.8.38,167.14c.07,19,13.5,30.86,33.78,30.78,38.78-.14,82.51-19.06,82.35-61.08C116.37,97.54,25.79,87.28,25.68,56.89Z"
                      ></path>
                      <path
                        fill="currentColor"
                        d="
     M395.37,162.18c-.31-.75-1.18-.57-2.33.38-4.4,3.63-14.46,13.91-38,14-42.92.16-50.37-70.58-50.37-70.58s32.71-24.42,37.82-34.27-11.15-12-11.15-12-22.88,27.84-39.1,36C294,83.6,306,56,306.69,40.13s-19.11-12-22.27-10.48c0,6.93-17.49,69.84-23.86,104.42-3.75,6-9.11,12.86-13.91,12.87-2.78,0-3.8-5.15-3.83-12.53,0-10.24,5.64-26.65,5.6-36.62,0-6.9-3.17-7.31-5.9-7.3-.59,0-3.87.09-4.47.09-7,0-4.7-6-11-5.94-19.28.07-43.84,21.12-44.91,52.89-6.51,4.31-15.62,9.74-20.27,9.76-4.88,0-6.09-4.51-6.1-8.41,0-6.85,11.08-47.55,11.08-47.55s14.11-3.62,20.27-4.81c4.66-.91,6-1.25,7.81-3.5s5.35-6.9,8.21-11.08.05-7.41-5.24-7.39c-6.94,0-25.51,4.4-25.51,4.4s8.92-38.46,8.91-39.24-1-1.19-2.51-1.18c-3.38,0-9.41,1.82-13.27,3.2-5.91,2.11-10.72,9.35-11.69,12.72s-7.65,29.76-7.65,29.76-35.77,12.35-40.66,14.2a.74.74,0,0,0-.5.7c0,.32,4.09,16,12.48,15.94,6,0,23.63-7.22,23.63-7.22s-9.06,36-9,48c0,7.7,3.63,16.72,18.67,16.67,14,0,26.25-7.23,33.11-12.26,3.75,9.49,12.61,12.09,18.66,12.07,13.56,0,24-10.82,25.34-12.27,1.76,4.16,5.91,12.15,15.39,12.12,5.36,0,10.91-6,15-11.82a23.38,23.38,0,0,0,.05,3.63c1.64,14.92,23.79,6.15,25,4.07.75-10.79.28-32.85,4.59-46.47,5.72,46.46,27.42,77.71,66.43,77.57,21.81-.08,33-6.35,37.63-11.52A15.9,15.9,0,0,0,395.37,162.18ZM208.2,146.86c-18.73.07,5.73-48.48,21.71-48.54C229.93,104.58,229.58,146.79,208.2,146.86Z"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M360.26,161.74c16.91-.06,30-11.19,32.4-14.81,3.1-4.71-3.6-11.82-5.73-11.7-5.34,5.11-10.92,11.29-23.45,11.33-14.75.06-11.41-16.17-11.41-16.17s28.39,3.67,39.8-16.74c3.65-6.53,3.8-15.56,2.33-19.45s-9.73-11.09-22.87-10c-16.14,1.36-36.48,18.19-40.95,38.4C326.79,138.86,333.58,161.84,360.26,161.74Zm18-68.1c2.66-.09,2.42,4.29,1.71,8.87-1,6.21-9.53,22-25.81,21.38C355.29,114.7,367.4,94,378.29,93.64Z"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 2 }} />
          <Box sx={{ display: "flex" }}>
            <FormControl sx={{ m: 1, minWidth: 120, marginRight: "0px" }}>
              <InputLabel id="currency-select-label">Currency</InputLabel>
              <Select
                labelId="currency-select-label"
                id="currency-select"
                value={selectedCurrency}
                onChange={handleCurrencyChange}
                label="Currency"
                sx={{
                  borderTopRightRadius: "0px",
                  borderBottomRightRadius: "0px",
                }}
              >
                <MenuItem value="">
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ "aria-label": "search" }}
                      value={selectedCurrency}
                      onClick={(event) => event.stopPropagation()}
                      onChange={handleCurrencyChange}
                    />
                  </Search>
                </MenuItem>
                {currencyOptions
                  .filter((option) =>
                    option.name.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((option) => (
                    <MenuItem key={option.code} value={option.code}>
                      <Box>
                        {selectedCurrency === option.code ? (
                          <>
                            {option.amount.toFixed(1)} {option.icon}
                            {option.code}
                          </>
                        ) : (
                          <>
                            {option.amount.toFixed(4)}
                            {option.icon}
                            {option.code}
                          </>
                        )}
                      </Box>
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            <Box
              sx={{
                textAlign: "center",
                marginTop: "8.3px",
                justifyContent: "center",
              }}
            >
              <Button
                sx={{
                  height: "55px",
                  borderTopLeftRadius: "0px",
                  borderBottomLeftRadius: "0px",
                }}
                variant="contained"
              >
                Wallet
              </Button>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Search>
              <SearchIconMain>
                <SearchIcon />
              </SearchIconMain>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </Search>
            <IconButton
              onClick={handleMessageMenuOpen}
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton
              onClick={handleNotiMenuOpen}
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </ToolbarWrapper>
      </AppBarWrapper>

      {renderMobileMenu}
      {renderProfileMenu}
      {renderNotiMenu}
      {renderMessageMenu}
    </Box>
  );
};

export default Navbar;
