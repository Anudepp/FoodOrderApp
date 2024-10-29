import { useRouteError } from "react-router-dom";

const Error = () => { 
  const err = useRouteError()// Get the error object from the route
  console.log(err) // Log the error object to the console
    return (
        <div>
        <h4>{err.error?.message}</h4>

        </div>
    );
}

export default Error; // Ensure you export the Error component