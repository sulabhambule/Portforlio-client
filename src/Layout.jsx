import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx"
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer.jsx";

const Layout = () => {
  return (
    <div className="bg-secondary-light dark:bg-primary-dark transition duration-300">
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;
