import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


// Applayout component 
// This component serves as the main layout for the application, containing the header and the outlet for rendering child routes.

const Applayout = ()=>{
  return (
    <div className="app">
      <Header />
      <Outlet />
      
    </div>
  )
}


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
    
      {
        path: "/about",
        element: <About/>
    
      },
      {
        path: "/contact",
        element: <Contact/>
        
      },
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/restaurants/:resid",
        element: <RestaurantMenu/>
      }

    ]

  }, 

]);
// Creates a React DOM root element for rendering components within the HTML element with the ID "root".
const root = ReactDOM.createRoot(document.getElementById("root"))

// Renders the RouterProvider component, which provides routing functionality to the application using the defined appRouter.
root.render(<RouterProvider router={appRouter}/>);
