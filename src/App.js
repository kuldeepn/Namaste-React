import ReactDOM from "react-dom/client";
import React from "react";
import "../index.css";
import Header from "./component/Header";
import Body from "./component/Body";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
