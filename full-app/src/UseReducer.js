import React, { useReducer } from "react";
function UseReducer(){
const [number,setNamber] =useReducer((number,newNumber) =>number +newNumber ,0);
    return(
<>
<h1 onClick={() => setNamber(1)}>{number}</h1>
</>
);
}
export default UseReducer;