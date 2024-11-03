import React from 'react';
import UserClass from './UserClass';
import React from 'react';


// About component is a parent component of UserClass component

/* 

class component lifecycle methods for multiple child components
- 1. parent constructor
- 2. parent render
    - 3. child 1 constructor
    - 4. child 1 render
    - 5. child 2 constructor    -- this is render phase 
    - 6. child 2 render
    - 7. child 3 constructor
    - 8. child 3 render


    <DOM updated in a single batch>
    - 9. child 1 componentDidMount    -- this is commit phase
    - 10. child 2 componentDidMount
    - 11. child 3 componentDidMount


- 12. parent componentDidMount

*/ 

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
        />

      </div>
    );
  }
}


export default About;