import React, { useState, useEffect } from "react";
import "./shoppingcards.css";
import { Box } from "@mui/material";
import Hrtag from "../hrtag/Hrtag";

export default function Shopping() {
  const [fake, setFake] = useState([]);

  useEffect(() => {
    const fakestore = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const jsonData = await response.json();
        setFake(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fakestore();
  }, []);

  return (
    <>
      <h1>New Arrival</h1>
      <Hrtag />
      <Box className="container">
        {fake.map((values) => (
          <div key={values.id} className="boxs">
           <h1>img</h1>
            
            <div className="content">
              <p>{values.description}</p>
              <h5>{values.price}</h5>
            </div>
          </div>
        ))}
      </Box>
    </>
  );
}
