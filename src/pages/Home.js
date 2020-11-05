import React from "react";
import DrawPots from "../components/DrawPots/DrawPots";
import Footer from "../components/Footer/Footer";
import GroupStage from "../components/GroupStage/GroupStage";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "../components/navbar/Navbar";
import Services from "../components/Servieces/Services";
import Sidebar from "../components/sidebar/Sidebar";
import Tournament from "../components/Tournament/Tournament";

const Home = () => {
  return (
    <>
      <Sidebar />

      <Navbar />
      <HeroSection />
      <GroupStage />

      <DrawPots />
      <Tournament />

      {/* <Services /> */}
      <Footer />
    </>
  );
};

export default Home;
