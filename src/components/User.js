import { useState } from "react";

const User = (props) => { 

    // Multiple Local state variable
    const [count] = useState(1);
    const [count2] = useState(2);

    // Array destructuring
    const { name, location, contact } = props;
    

    console.log(props);
    return (
        <div className="user-card">
            <h1>Count= {count}</h1>
            <h1>Count2= {count2}</h1>   
            <h2>{name }</h2>
            <h3>{ location}</h3>
            <h3>{ contact}</h3>
        </div>
    );
}

export default User;