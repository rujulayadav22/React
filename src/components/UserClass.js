import React from "react";

class UserClass extends React.Component {
     
  constructor(props) {
    super(props);

    this.state = {
      count1: 0,
    };
  }

  componentDidMount(){
    console.log("Child component did mount")
  }

  render() {
    const { name, location } = this.props;
    const { count1 } = this.state;   

    return (
      <div className="userclass">
        <h1>Count1: {count1}</h1>

        <button onClick={() => {
            // NEVER UPDATE STATE VARIABLES DIRECTLY//
          this.setState({ 
            count1: this.state.count1 + 1 });
            //count1: count1 + 1   one and the same//
        }}>
          Count Increase
        </button>

        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: rujula.yadav22@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
