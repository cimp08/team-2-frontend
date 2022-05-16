import React from "react";
import Header from "../Header";
import SwipeHeader from "./SwipeHeader";
import DogsCards from "./DogsCards";
import SwipeButtons from "./SwipeButtons";

export default function SwipePage() {
	return (
		<>
			<Header />
			<div>
				<SwipeHeader />
				<DogsCards />
				<SwipeButtons />
			</div>
		</>
	);
}
