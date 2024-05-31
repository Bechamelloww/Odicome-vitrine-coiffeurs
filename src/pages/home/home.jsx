// pages/home/home.jsx
import React from "react";
import PricingComponent from "../../components/princing.jsx";
import FeatureComponent from "../../components/feature.jsx";
import NavbarComponent from "../../components/navbar.jsx";
import MainInfoComponent from "../../components/mainInfo.jsx";
import FooterComponent from "../../components/footer.jsx";
import LayoutComponent from "../../components/layout.jsx";
import BentoInfoComponent from "../../components/bentoInfos.jsx";

const Home = () => {
	return (
		<>
			<NavbarComponent></NavbarComponent>
			<LayoutComponent component={MainInfoComponent}></LayoutComponent>
			<LayoutComponent component={BentoInfoComponent}></LayoutComponent>
			<FooterComponent></FooterComponent>
		</>
	);
};

export default Home;
