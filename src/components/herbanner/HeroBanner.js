import React from "react";
import Box from '@mui/material/Box'
import "./herobanners.css";

//Images Herobanner
import banner from "../../assets/image.png";

export const HeroBanner = () => {
  return (
    <Box className="banner">
      <img src={banner} />
      <Box className="contantBanner">
        <p>Luxury Fashion & Accessories</p>
        <button className="btn"><a>Explore Collection</a></button>
      </Box>
    </Box>
  );
};
