import React, { useReducer , useState } from "react";

function Cheeked(){
const [checked,toggle] =useReducer(
    (checked)=> !checked,
    false
);
    return(
<>
<input  type="checkbox" value={checked} 
onChange={toggle} />
{checked ? "checked" :"not checked"}
</>

);
}
export default Cheeked;