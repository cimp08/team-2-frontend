import { IconButton } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import React from "react";
import "./SwipeButtons.css";

const SwipeButtons = () => {
	return (
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
	);
};

export default SwipeButtons;
