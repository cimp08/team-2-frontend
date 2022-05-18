import React from "react";
import "./DogCards.css";
import TinderCard from "react-tinder-card";
import { useState } from "react";
import { List } from "@mui/material";

const DogCards = () => {
	const dogs = [
		{
			name: "Cassy",
			age: "5 years",
			breed: "Bulldog",
			gender: "female",
			about: "He likes to hunt cats all day.",
			url: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		},
		{
			name: "Charlie",
			age: "2 years",
			breed: "Labrador",
			gender: "female",
			about: "He likes to eat vegetables all day.",
			url: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
		},
		{
			name: "Max",
			age: "9 years",
			breed: "French bulldog",
			gender: "male",
			about: "He likes to sleep all day.",
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
		<div className="flex flex-col justify-center content-center pb-14">
			<div className="w-72 h-96">
				{dogs.map((dog) => (
					<TinderCard
						className="swipe absolute"
						key={dog.name}
						onSwipe={(dir) => swiped(dir, dog.name)}
						onCardLeftScreen={() => outOfFrame(dog.name)}
					>
						<div
							style={{ backgroundImage: `url(${dog.url})` }}
							className="w-72 h-96 shadow-xl bg-cover bg-center rounded-3xl"
						>
							<div className="info_container bg-white w-64 h-28 p-4 rounded-3xl absolute text-xs shadow-2xl">
								<p className="text-sm font-semibold">{dog.name}</p>
								<List className="list-none">
									<li>
										<p>{dog.age}</p>
									</li>
									<li>
										<p>{dog.breed}</p>
									</li>
									<li>
										<p>{dog.about}</p>
									</li>
								</List>
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
