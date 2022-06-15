import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SwipeHeader from "../components/SwipeHeader";
import TinderCard from "react-tinder-card";
import { useNavigate } from "react-router-dom";
import { List } from "@mui/material";
import "./Swipe.css";
import axios from "axios";
import { useCookies } from "react-cookie";
import FemaleRoundedIcon from "@mui/icons-material/FemaleRounded";
import MaleRoundedIcon from "@mui/icons-material/MaleRounded";
import { TailSpin } from "react-loader-spinner";

const Swipe = () => {
  const [user, setUser] = useState(null);
  const [genderedUsers, setGenderedUsers] = useState(null);
  const [lastDirection, setLastDirection] = useState();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [loading, setLoading] = useState(false);

  const userId = cookies.userId;
  const token = cookies.token;
  let navigate = useNavigate();
  console.log(userId);
  console.log(token);

  // Get User
  const getUser = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/users/user`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`, // Cross-domain safari
          },
        }
      );
      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Get all the users that signed user are intrested in
  const getGenderedUsers = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/users/gender-users`,
        {
          params: { gender: user?.genderInterest },
        }
      );
      setGenderedUsers(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    setLoading(true);
    if (user) {
      // If user have not created a profile it can not access the swipe
      if (!user.dogName) {
        navigate("/profile");
        window.location.reload();
      }

      getGenderedUsers();
    }
  }, [user]);

  // Update matches
  const updateMatches = async (matchedUserId) => {
    try {
      await axios.put(
        `${process.env.REACT_APP_API_URL}/api/v1/users/add-match`,
        {
          userId,
          matchedUserId,
        }
      );
      getUser();
    } catch (error) {
      console.log(error);
    }
  };

  const swiped = (direction, swipedUserId) => {
    if (direction === "right") {
      updateMatches(swipedUserId);
    }
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  const matchedUserIds = user?.matches
    .map(({ userId }) => userId)
    .concat(userId);

  // Filter the users thats already liked
  const filteredGenderedUsers = genderedUsers?.filter(
    (genderedUser) => !matchedUserIds.includes(genderedUser._id)
  );

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      <Header />
      <div className="w-full mt-20">
        <SwipeHeader />
      </div>
      <div className="swipe_container flex justify-around mb-40">
        <div className="flex flex-col">
          {loading ? (
            <div className="w-72 h-96 flex justify-center items-center">
              <div className="content-center">
                <TailSpin color="#7f67c5" height={80} width={80} />
              </div>
            </div>
          ) : (
            <div className="w-72 h-96">
              {filteredGenderedUsers &&
                filteredGenderedUsers?.map((user) => (
                  <TinderCard
                    className="swipe absolute"
                    key={user.dogName}
                    onSwipe={(dir) => swiped(dir, user._id)}
                    onCardLeftScreen={() => outOfFrame(user.dogName)}
                  >
                    <div
                      style={{ backgroundImage: `url(${user.url})` }}
                      className="w-72 h-96 bg-cover bg-center rounded-3xl"
                    >
                      <div className="info_container md:-ml-28 mt-80 ml-4 bg-white w-64 h-40 p-4 rounded-3xl absolute text-xs">
                        <div className="flex justify-between">
                          <div className="flex-col w-full">
                            <p className="text-lg font-semibold mb-1">
                              {capitalizeFirstLetter(user.dogName)},
                              <span className="text-sm"> {user.age} years</span>
                            </p>
                            <div className="max-w-max border-b  border-gray-400">
                              <p>{capitalizeFirstLetter(user.breed)} </p>
                            </div>
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
              <p className="runout mt-10 text-center">You run out of swipes!</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Swipe;
