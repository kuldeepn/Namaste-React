import ReactDOM from "react-dom/client";
import React from "react";
import Header from "./Header";

const App = () => {
  return <div>{<Header />}</div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
