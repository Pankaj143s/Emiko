import React from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { Outlet } from "react-router-dom";
import FindDealer from "./components/sections/whereToBuy/FindDealer";
import ScrollToTop from "./utils/ScrollToTop";
import BlogPage from "./components/sections/blogs/BlogPage";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
