import React from "react";
import Navigation from "./Navigation";
import home from "./home.png";

function Homepage() {
    return(
        <>
            <Navigation/>
            <div  style={{
                color: "white",
                fontSize: "45px",
                paddingBottom: "40%",
                lineHeight: "486px",
                textAlign: "center",
                backgroundImage: `url(${home})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: '98.78vw',
                height: '4vh',
                }
            }>Welcome to the Home Page</div>
            
        </>
    );
}

export default Homepage;