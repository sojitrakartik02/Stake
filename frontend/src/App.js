import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Como/Navbar/Navbar.js";
import Sidebar from "./Como/Sidebar/Sidebar.js";
import Home from "./Como/Home/Home.js";
import { useAuth } from "./Context/AuthContext.js";
import AppBaseLayout from "./Como/Layouts/AppBaseLayout.js";
import Form from "./Como/Login/Form.js";
import Footer from "./Como/Footer/Footer.js";
import { colors } from "@mui/material";
import PaginationSport from "./Como/Pagination/PaginationSport.js";
import Wallet from "./Como/WalletOverlay/WalletOverlay.js";
import CardDetail from "./Como/Card/CardDetails.js";
import Notification from "./Como/Notification/Notification.js";
import Lobby from "./Como/Lobby/Lobby.js";
import { ToastContainer } from "react-toastify";
import "./App.css";
import MyBets from "./Como/Lobby/MyBets.js";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppBaseLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Form />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/card/:id" element={<CardDetail />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/my-bets" element={<MyBets />} />
          {/* <Route path="/lobby" element={<Lobby />} /> */}

          {/* <Route path="/pagination" element={<PaginationSport />} /> */}
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
