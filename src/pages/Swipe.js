import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SwipeHeader from "../components/SwipeHeader";
import TinderCard from "react-tinder-card";
import { useState, useEffect } from "react";
import { List } from "@mui/material";
import { IconButton } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import "./Swipe.css";
import axios from "axios";
import { useCookies } from "react-cookie";
const Swipe = () => {
  /* const dogs = [
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
  ]; */

  const [dog, setDog] = useState(null);
  const [dogs, setDogs] = useState(null);
  const [genderedUsers, setGenderedUsers] = useState(null);
  const [lastDirection, setLastDirection] = useState();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const userId = cookies.userId;

  /*
  How do we get the dogId to be able to find the logged in
  user's dog
  */
  const dogId = null;
  const getDog = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/dogs/${dogId}`
      );
      setDog(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDog();
  }, [dog]);
  console.log(dog);

  const getAllDogs = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/dogs`);
      setDogs(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllDogs();
  }, []);
  console.log(dogs);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };
  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <>
      <Header />
      <div className="swipe_container flex justify-around m-20">
        <div className="flex flex-col md:flex-row">
          <SwipeHeader />

          <div className="swipe_cards_buttons flex flex-col">
            <div className="flex flex-col justify-center content-center pb-14">
              <div className="w-72 h-96">
                {dogs
                  ? dogs.dogs.map((dog) => (
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
                          <div className="info_container md:-ml-28 mt-80 ml-4 bg-white w-64 h-28 p-4 rounded-3xl absolute text-xs shadow-2xl">
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
                    ))
                  : null}
                {/* <div className="swipe_info absolute">
					{lastDirection ? <p>You swiped {lastDirection}</p> : <p></p>}
				</div> */}
              </div>
            </div>

            <div className="swipe_buttons flex items-center justify-between pt-12">
              <IconButton className="swipe_buttons_left">
                <CancelOutlinedIcon fontSize="large"></CancelOutlinedIcon>
              </IconButton>
              <IconButton className="swipe_buttons_star">
                <StarBorderIcon fontSize="large"></StarBorderIcon>
              </IconButton>
              <IconButton className="swipe_buttons_right">
                <CheckCircleOutlinedIcon fontSize="large"></CheckCircleOutlinedIcon>
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Swipe;
