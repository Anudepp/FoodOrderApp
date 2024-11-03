import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(" Child Constructor");

    // Multiple Local state variable
    this.state = {
      count: 1,
      count2: 2
    };
  };
  
  componentDidMount() {
    console.log(" Child componentDidMount");
  }
  render() {
    
    // Array destructuring
    const { name, location, contact } = this.props;
    const { count } = this.state;

    console.log(" Child Render");


    return (
      <div className="user-card">
        <h2>{name}</h2>
        <h3>{location}</h3>
        <h3>{contact}</h3>
        <h3>Count = {count} </h3> 
        <button onClick={() => {
          // Update the state variable count by 1
          this.setState({ count: count + 1 });
         }}>increase count</button>
      </div>
    );
  }
}

export default UserClass;