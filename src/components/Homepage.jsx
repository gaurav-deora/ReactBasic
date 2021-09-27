import React from "react";
import Navigation from "./Navigation";

function Homepage() {
    return(
        <>
            <Navigation/>
            <div style={{
                color: "black",
                fontSize: "40px",
                backgroundColor: "rgb(163, 158, 245)",
                paddingBottom: "4%",
                lineHeight: "486px",
                textAlign: "center",
                
            }
            }>Welcome to the Home Page</div>
        </>
    );
}

export default Homepage;