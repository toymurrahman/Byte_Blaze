import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <div className="h-[82px]">
       
        <Navbar />
      </div>
  
      <div className="min-h-[calc(100vh-134px)]">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
