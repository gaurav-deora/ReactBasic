import React from "react";

function Firstparagraph(){

    const [ number, setNumber ] = React.useState(99)

    return(
        <>
         <p>{number}</p>
         <button onClick={function() {
             setNumber(number +1);
         }}>CLICK HERE</button>
        </> 
    )
  }
  export default Firstparagraph;