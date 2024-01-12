import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
    console.log("Constructor of child class");
  }

  componentDidMount() {
    console.log("ComponentDidMount of child class");
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate");
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount");
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    console.log("render of child class");
    return (
      <div>
        <h2>Class = {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase count
        </button>
        <h2>Class Component</h2>
        <h3>Name: {name}</h3>
        <h3>Locatoin: {location}</h3>
      </div>
    );
  }
}

export default UserClass;
