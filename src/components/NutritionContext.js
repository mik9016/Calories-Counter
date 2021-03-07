import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const NutritionContext = createContext();

export const NutritionProvider = (props) => {
  //setting env variables
  const [calories, setCalories] = useState("0");

  const APPID = "fc548e3c";
  const APPKEY = "f48939486d201af69acb7907b4833f99";
  const URL = `https://api.edamam.com/api/nutrition-details?app_id=${APPID}&app_key=${APPKEY}`;

  let quantity;
  let item;

  let meal = {
    title: "my meal",
    ingr: ["1 egg","2 apples"],
  };


  //axios


  return (
    <NutritionProvider>{props.children}</NutritionProvider>
  );
};
