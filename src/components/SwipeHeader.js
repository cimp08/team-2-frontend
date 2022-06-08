import React from "react";
import { IconButton } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import SettingsIcon from "@mui/icons-material/Settings";
import ChatIcon from "@mui/icons-material/Chat";
import HomeIcon from "@mui/icons-material/Home";
import "./SwipeHeader.css";
import { Link } from "react-router-dom";

const SwipeHeader = () => {
  return (
    <div className="swipe_header flex md:flex-col justify-around pb-12 md:left-28 md:absolute">
      <div className="icon md:mb-20">
        <Link to="/">
          <IconButton className="swipe_icons">
            <HomeIcon fontSize="large"></HomeIcon>
          </IconButton>
        </Link>
      </div>
      <div className="icon md:mb-20">
        <Link to="/swipe">
          <IconButton className="swipe_icons">
            <PetsIcon fontSize="large"></PetsIcon>
          </IconButton>
        </Link>
      </div>
      <div className="icon md:mb-20">
        <Link to="/chat">
          <IconButton className="swipe_icons">
            <ChatIcon fontSize="large"></ChatIcon>
          </IconButton>
        </Link>
      </div>
      <div className="icon md:mb-20">
        <Link to="/profile">
          <IconButton className="swipe_icons">
            <SettingsIcon fontSize="large"></SettingsIcon>
          </IconButton>
        </Link>
      </div>
    </div>
  );
};

export default SwipeHeader;
