import React, { useState } from "react";
import { useInput } from "./useInput";

const Referance = (props) => {
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("");


    const submit = (e) => {
        e.preventDefault();
        alert(`${titleProps.value} sounds like ${colorProps.value} `)
        resetTitle("");
        resetColor("#000000");
    };

    return (
        <>
            <form onSubmit={submit}>
                <input {...titleProps} type="text" placeholder="sound..." />
                <input {...colorProps} type="color" />
                <button>Add</button>
            </form>
        </>

    );
}
export default Referance;