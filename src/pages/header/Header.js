import React from "react";
import "./header.css";

//import Icons
import menu from "../../assets/Menu.png";
import logo from "../../assets/Group.png";
import search from "../../assets/Search.png";
import shopping from "../../assets/shoppingbag.png"
import { Box } from "@mui/material";
import SideBar from "../../components/sidebar/SideBar";


export const Header = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Box className="navbar">
      <Box className="nav-icon">
      <img src={menu} alt="menu icons" onClick={toggleDrawer("left", true)} className="menu"/>
      <img src={logo} alt="logo" className="openfashion"/>
     <Box className="searchingAndShopping">
      <img src={search} alt="search icons" className="search"/>
      <img src={shopping} alt="shopping icons" className="shopping"/>
      </Box>
      </Box>
      <SideBar state={state} setState={setState} toggleDrawer={toggleDrawer} />
    </Box>
  );
};
