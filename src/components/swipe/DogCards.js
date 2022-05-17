import React from "react";
import "./DogCards.css";
import TinderCard from "react-tinder-card";
import { useState } from "react";
import { YoutubeSearchedForSharp } from "@mui/icons-material";

const DogCards = () => {
	const dogs = [
		{
			name: "Snow",
			age: "5 years",
			breed: "something",
			info: "He likes to hunt cats all day.",
			url: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		},
		{
			name: "White",
			age: "2 years",
			breed: "something",
			info: "He likes to eat vegetables all day.",
			url: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
		},
		{
			name: "Black",
			age: "9 years",
			breed: "something",
			info: "He likes to sleep all.",
			url: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		},
	];
	const [lastDirection, setLastDirection] = useState();

	const swiped = (direction, nameToDelete) => {
		console.log("removing: " + nameToDelete);
		setLastDirection(direction);
	};
	const outOfFrame = (name) => {
		console.log(name + " left the screen!");
	};

	return (
		<div className="swipe_container w-3/4 flex flex-col justify-center content-center h-full">
			<div className="card_container w-80 h-96">
				{dogs.map((dog) => (
					<TinderCard
						className="swipe absolute"
						key={dog.name}
						onSwipe={(dir) => swiped(dir, dog.name)}
						onCardLeftScreen={() => outOfFrame(dog.name)}
					>
						<div
							style={{ backgroundImage: `url(${dog.url})` }}
							className="card w-80 h-96 shadow-xl"
						>
				
							<div className="info_container bg-white w-64 h-32 rounded-3xl absolute text-xs shadow-2xl">
								<p>{dog.name}</p>
								<p>{dog.age}</p>
								<p>{dog.breed}</p>
								<p>{dog.info}</p>
							</div>
						</div>
					</TinderCard>
				))}
				{/* <div className="swipe_info absolute">
					{lastDirection ? <p>You swiped {lastDirection}</p> : <p></p>}
				</div> */}
			</div>
		</div>
	);
};

export default DogCards;
