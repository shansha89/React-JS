 import React from "react";
 import ReactDOM from "react-dom/client";

 const Header = () => {
    return (
        <div className="header">
                <img 
            src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
            alt="logo" width={100} height={100} />          

            <ul>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
        </div>
            
        
    )
 }

 const AppLayout = () => {
    return (
    <div className = "container">
        <Header/>
    </div>
    );
 }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);

