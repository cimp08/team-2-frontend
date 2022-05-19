import React from "react";
import Header from "../components/Header";
import SwipeHeader from "../components/swipe/SwipeHeader";
import DogCards from "../components/swipe/DogCards";
import SwipeButtons from "../components/swipe/SwipeButtons";

const Swipe = () => {
	return (
		<>
			<Header />
			<div className="flex justify-center m-20">
				<SwipeHeader />
				<div className="swipe_cards_buttons">
					<DogCards />

					<SwipeButtons />
				</div>
			</div>
		</>
	);
};

export default Swipe;
