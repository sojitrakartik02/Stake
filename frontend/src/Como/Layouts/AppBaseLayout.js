import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { useAuth } from "../../Context/AuthContext";
import Footer from "../Footer/Footer";

const AppBaseLayout = () => {
  const { isDrawerOpen, handleDrawerClose, handleDrawerOpen } = useAuth();

  return (
    <div>
      <Navbar
        sx={{ marginLeft: isDrawerOpen ? "240px" : "0px" }}
        isDrawerOpen={isDrawerOpen}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <Sidebar
        sx={{ marginLeft: isDrawerOpen ? "240px" : "0px" }}
        handleDrawerClose={handleDrawerClose}
        isDrawerOpen={isDrawerOpen}
      />
    </div>
  );
};

export default AppBaseLayout;
