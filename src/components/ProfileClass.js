import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
   this.state = {
        userInfo:{
            name: "Dummy Name",
            bio: "Dummy bio",
        },
    };
  
    console.log("Child-Constructor")
  }
   async componentDidMount() {
     
    const data = await fetch("https://api.github.com/users/SINGHSHEKHAWAT1651786");
    const json = await data.json();
    this.setState({
        userInfo: json,
    });
   
  };


  render() {
    const { count } = this.state;
console.log('child- render');
    return (
      <div>
        <h1>Profile Class component</h1>
        <h2>Name: {this.state.userInfo.name}</h2>
        <h3>bio: {this.state.userInfo.bio}</h3>
  <h3>events_url: {this.state.userInfo.events_url}</h3>
      </div>
    );
  }
}

export default Profile;
