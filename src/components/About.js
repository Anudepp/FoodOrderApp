import React from 'react';
import UserClass from './UserClass';
import React from 'react';


// About component is a parent component of UserClass component

// lifecycle methods in class components
// 1. parent constructor
// 2. parent render
// 3. child constructor
// 4. child render
// 5. child componentDidMount
// 6. parent componentDidMount

// componentDIdMount is used to make API calls, fetch data from the server, etc.
class About extends React.Component {
  constructor(props) { 
    super(props);
    console.log(" Parent Constructor");
  }
  componentDidMount() { 
    console.log(" Parent componentDidMount");
  }
  render() {
    console.log(" Parent Render");
    return (
      <div>
        <h1>About Us</h1>
        <h2>welcome to Food App</h2>
        <UserClass
          name={"Anudeep(class props)"}
          location={"Delhi class props"}
          contact={"234567890 class props"}
        />
      </div>
    );
  }
}


export default About;