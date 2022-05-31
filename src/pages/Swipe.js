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
import FemaleRoundedIcon from "@mui/icons-material/FemaleRounded";
import MaleRoundedIcon from "@mui/icons-material/MaleRounded";

const Swipe = () => {
  const [user, setUser] = useState(null);
  const [genderedUsers, setGenderedUsers] = useState(null);
  const [lastDirection, setLastDirection] = useState();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const userId = cookies.userId;

  const getUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/users/user",
        {
          params: { userId },
        }
      );
      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getGenderedUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/users/gender-users",
        {
          params: { gender: user?.genderInterest },
        }
      );
      setGenderedUsers(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (user) {
      getGenderedUsers();
    }
  }, [user]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
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
                {genderedUsers &&
                  genderedUsers?.map((user) => (
                    <TinderCard
                      className="swipe absolute"
                      key={user.dogName}
                      onSwipe={(dir) => swiped(dir, user.dogName)}
                      onCardLeftScreen={() => outOfFrame(user.dogName)}
                    >
                      <div
                        style={{ backgroundImage: `url(${user.url})` }}
                        className="w-72 h-96 shadow-xl bg-cover bg-center rounded-3xl"
                      >
                        <div className="info_container md:-ml-28 mt-80 ml-4 bg-white w-64 p-4 rounded-3xl absolute text-xs shadow-2xl">
                          <div className="flex justify-between">
                            <div className="flex-col w-full">
                              <p className="text-lg font-semibold">
                                {capitalizeFirstLetter(user.dogName)},{" "}
                                {user.age} years
                              </p>
                              <p>{capitalizeFirstLetter(user.breed)} </p>
                              <div className="w-1/2 border-t border-dotted border-gray-400"></div>
                            </div>
                            {user.gender === "she" ? (
                              <FemaleRoundedIcon></FemaleRoundedIcon>
                            ) : (
                              <MaleRoundedIcon></MaleRoundedIcon>
                            )}
                          </div>

                          <List className="list-none">
                            <li>
                              <p className="mt-1 mb-1">{user.about}</p>
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
