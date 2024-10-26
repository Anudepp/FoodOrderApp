import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";


// Applayout component 
const Applayout = ()=>{
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
}

// Creates a React DOM root element for rendering components within the HTML element with the ID "root".
const root = ReactDOM.createRoot(document.getElementById("root"))

// Renders the <Applayout/> component within the previously created root element.
root.render(<Applayout/>);
