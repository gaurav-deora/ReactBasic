import React from "react";
import Navigation from "./Navigation";
import contact from "./contact.png";

function Contactpage() {
    return(
        <>
            <Navigation/>
            <div style={{
                color: "#FFFFFF",
                fontSize: "45px",
                paddingBottom: "40%",
                lineHeight: "486px",
                textAlign: "center",
                backgroundImage: `url(${contact})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: '98.78vw',
                height: '4vh',
            }   
            }
            >Welcome to the contact page</div>
        </>
    );
}

export default Contactpage;