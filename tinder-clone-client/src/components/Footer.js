import React from "react";
import "../styles/Footer.css";
import { IconButton } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";

function Footer() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons_repeat b">
        <ReplayIcon />
      </IconButton>
      <IconButton className="swipeButtons_left b">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons_star b">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons_right b">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons_lightning b">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
export default Footer;
