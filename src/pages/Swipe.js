import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SwipeHeader from "../components/swipe/SwipeHeader";
import DogCards from "../components/swipe/DogCards";
import SwipeButtons from "../components/swipe/SwipeButtons";

const Swipe = () => {
	return (
		<>
			<Header />
			<div className="swipe_container flex justify-around m-20">
				<div className="flex flex-col md:flex-row">
				
					<SwipeHeader />

					<div className="swipe_cards_buttons flex flex-col">
						<DogCards />

						<SwipeButtons />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Swipe;
