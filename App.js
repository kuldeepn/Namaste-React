/*
<div id='parent'>
<div id='child'>
<h1>hello i'm h1 tag</h1>
</div>
</div>

*/

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }),
  React.createElement("h1", {}, "I'm h1 tag")
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
