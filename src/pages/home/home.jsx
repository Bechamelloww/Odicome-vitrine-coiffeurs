// pages/home/home.jsx
import React from "react";
import PricingComponent from "../../components/princing.jsx";
import FeatureComponent from "../../components/feature.jsx";
import NavbarComponent from "../../components/navbar.jsx";
import MainInfoComponent from "../../components/mainInfo.jsx";
import FooterComponent from "../../components/footer.jsx";
import BentoInfoComponent from "../../components/bentoInfos.jsx";

const Home = () => {
	return (
		<>
			<NavbarComponent></NavbarComponent>
			<MainInfoComponent></MainInfoComponent>
			<BentoInfoComponent></BentoInfoComponent>
			<FooterComponent></FooterComponent>
		</>
	);
};

export default Home;
