import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  
  const [calories, setCalories] = useState("0");

  const APPID = "fc548e3c";
  const APPKEY = "f48939486d201af69acb7907b4833f99";

  const meal = {
    title: "meal",
    ingr: ["1 egg","1 apple"],
  };

  const proba = 'jakis tekst';

  const URL = `https://api.edamam.com/api/nutrition-details?app_id=${APPID}&app_key=${APPKEY}`;

  useEffect(() => {
    axios.post(URL, meal)
    .then((res) => {
      console.log(res.data);
      setCalories(res.data.calories);
    });
    // return () => {

    // }
  }, []);

  return (
    <MovieContext.Provider value={[calories,proba]} >
      {props.children}
    </MovieContext.Provider>
  );
};
