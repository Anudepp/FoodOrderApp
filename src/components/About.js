import React from 'react';
import User from './User';
import UserClass from './UserClass';

const About = () => {
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
};

export default About;