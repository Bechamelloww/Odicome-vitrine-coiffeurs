// pages/home/home.jsx
import React from "react";
import PricingComponent from "../../components/princing.jsx";
import FeatureComponent from "../../components/feature.jsx";
import NavbarComponent from "../../components/navbar.jsx";

const Home = () => {
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <FeatureComponent></FeatureComponent>
      <PricingComponent></PricingComponent>
    </>
  );
};

export default Home;
