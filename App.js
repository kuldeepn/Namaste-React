import ReactDOM from "react-dom/client";
import React from "react";

const Header1 = React.createElement(
  "div",
  { class: "title" },
  React.createElement("h1", {}, "This is h1 tag from ReactElement"),
  React.createElement("h2", {}, "this is h2 tag ReactElement"),
  React.createElement("h3", {}, "This is h3 tag ReactElement"),
);

const Header3 = () => {
  return (
    <div className="title">
      {Header2}
      <h1>This is h1 tag from using Functional Component</h1>
      <h2>This is h2 tag from using Functional Component</h2>
      <h3>This is h3 tag from using Functional Component</h3>
    </div>
  );
};

const Header2 = (
  <div className="title">
    <h1>This is h1 tag from using JSX</h1>
    <h2>This is h2 tag from using JSX</h2>
    <h3>This is h3 tag from using JSX</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header3 />);
