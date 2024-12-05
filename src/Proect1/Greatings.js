import React from "react";



function Greatings(){
  let date = new Date();
let inHours = date.getHours();

let dilouge;

let customStyle = {
  color: ""
}

if (inHours < 12) {
  dilouge ="Good moring"
  customStyle.color = "red"
} else if (inHours < 18) {
   dilouge ="Good Afternoon"
  customStyle.color = "Green"
}
else {
   dilouge ="Good Eveing"
  customStyle.color = "yellow"
}
return <h1 style={customStyle}>{dilouge}</h1>
}

export default Greatings;