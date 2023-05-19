//Create a React app from scratch.
import React from "react";
import ReactDom from "react-dom";
//Show a single h1 that says "Good morning" if between midnight and 12PM.
let date = new Date();
let hour = date.getHours();

let colorStyle = {
  color: "red",
  border: "5px solid black",
  Message: ""
};

if (hour === 24 && hour < 12) {
  colorStyle.Message = "Good Morning";
  colorStyle.color = "red";
} else if ((hour) => 12 && hour <= 6) {
  colorStyle.Message = "Good Afternoon";
  colorStyle.color = "blue";
} else if (hour > 6 && hour < 24) {
  colorStyle.Message = "Good Evening";
  colorStyle.color = "green";
}

ReactDom.render(
  <h1 style={colorStyle} className="heading">
    {colorStyle.Message}
  </h1>,
  document.getElementById(`root`)
);

//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
