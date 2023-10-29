import React from "react";
import ReactDOM  from "react-dom/client";

    
const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }),
  React.createElement("h1", {}, "I'm h1 tag hello kuldeep")
);



const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

root.render(heading);
