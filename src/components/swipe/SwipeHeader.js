import React from "react";
import { IconButton } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import SettingsIcon from "@mui/icons-material/Settings";
import ChatIcon from "@mui/icons-material/Chat";
import "./SwipeHeader.css";

const SwipeHeader = () => {
	return (
		<div className="swipe_header left-28 flex flex-col justify-between absolute">
			<div className="icon mb-40">
				<IconButton className="swipe_paw">
					<PetsIcon fontSize="large"></PetsIcon>
				</IconButton>
			</div>

			<div className="icon mb-40">
				<IconButton className="swipe_settings">
					<SettingsIcon fontSize="large"></SettingsIcon>
				</IconButton>
			</div>
			<div className="">
				<IconButton className="swipe_chat">
					<ChatIcon fontSize="large"></ChatIcon>
				</IconButton>
			</div>
		</div>
	);
};

export default SwipeHeader;
