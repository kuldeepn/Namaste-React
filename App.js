import ReactDOM from "react-dom/client";
import React from "react";

const App = () => (
  <div className="id">
    {console.log(number)}
    <h2> {number + 3000}</h2>
    <h2 className="heading">Hello I'm Function Component</h2>
  </div>
);

let number = 1000;

const title = (
  <div>
    <h1>Hello Namaste React</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
