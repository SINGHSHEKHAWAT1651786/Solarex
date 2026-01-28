import { Component } from "react";
import ProfileFunctionComponent from "./Profile";
import Profile from "./ProfileClass";

class About extends Component {
  constructor(props) {
    super(props);
 
    console.log("Parent - constructor");
  }


  render() {
    console.log("Parent - render");

    return (
      <div>
        <h1>About Page</h1>
        <h2>This is the Name</h2>
        <p>This is About page</p>

        <Profile name={"Akshay Class"} xyz="abc" />
      </div>
    );
  }
}

export default About;
