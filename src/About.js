import React from "react";
import User from "./components/User";
import UserClass from "./components/UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent component did mount");
  }

  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>About</h1>
        <h2>Class Component</h2>

        <UserClass name={"Rujula(class)"} />
      </div>
    );
  }
}

export default About;

 