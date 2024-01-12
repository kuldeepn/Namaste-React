import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor of parent class");
  }
  componentDidMount() {
    console.log("ComponentDidMount of parent class");
  }
  render() {
    console.log("render of parent class");
    return (
      <div>
        <h1>About Us</h1>
        <UserClass name="Kuldeep Nandeshwar" location="Pune" />
      </div>
    );
  }
}

export default About;
