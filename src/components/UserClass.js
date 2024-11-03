import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // Multiple Local state variable
    this.state = {
      userInfo: {
        name: "",
        location: "",
        contact: "",
        bio: "",
      }
    };
  };
  

  // componentDidMount is used to make API calls, fetch data from the server, etc.
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Anudepp");
    const json = await data.json();

    console.log(json);

    // Update the state with the fetched data
    this.setState({
      userInfo: {
        name: json.name,
        location: json.location,
        contact: json.email,
        bio: json.bio,
      }
    });
  }

  // componentDidUpdate is used to update the DOM when the state changes
  componentDidUpdate() { 
    console.log("componentDidUpdate");
  }
  
  // componentWillUnmount is used to clean up the resources
  componentWillUnmount() { 
    console.log("componentWillUnmount");
  }


  render() {
    
    // Array destructuring
    const { name, location, contact,bio } = this.state.userInfo;
    


    // Display the fetched data
    return (
      <div className="user-card">
        <h2>{name}</h2>
        <h3>{location}</h3>
        <h3>{contact}</h3>
        <h3>{ bio}</h3>
      </div>
    );
  }
}

export default UserClass;