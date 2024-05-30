// pages/home/home.jsx
import React from "react";
import PricingComponent from "../../components/princing.jsx";
import FeatureComponent from "../../components/feature.jsx";
import NavbarComponent from "../../components/navbar.jsx";
import MainInfoComponent from "../../components/mainInfo.jsx";

const Home = () => {
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <MainInfoComponent></MainInfoComponent>
    </>
  );
};

export default Home;
