import React from "react";
import "../styles/Header.css";
//actuall icon for  imported from material ui icons
import AccountBoxIcon from "@mui/icons-material/AccountBox";

//to make icon a button and get ripple effect this is imported from mu
import IconButton from "@mui/material/IconButton";
//forum icon from material ui
import ForumIcon from "@mui/icons-material/Forum";
function Header() {
  return (
    <div className="Header">
      <IconButton>
        <AccountBoxIcon fontSize="large" className="header_icon" />
      </IconButton>

      <img
        src="https://www.citypng.com/public/uploads/preview/-11595270983sekxed5idc.png"
        alt=""
        className="header_logo"
      />
      <IconButton>
        <ForumIcon fontSize="large" className="header_icon" />
      </IconButton>
    </div>
  );
}
export default Header;
