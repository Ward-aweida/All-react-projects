import React, { useReducer } from "react";

const initailState = {
    message: "hi"
};
function reducer(state,action){
    switch (action.type) {
        case "yell":
            return {
                message:`Hey! I Just Said ${state.message}`
            }
            case "whisper":
                return {
                    message:`Excuse me,I Just said ${state.message}`
                }
    }
}
function Message() {

    const [state, dispath] = useReducer(
        reducer,
        initailState
    );
    return (
        <>
            <p>Message:{state.message}</p>
            <button onClick={()=>dispath({type: "yell"})}>Yell</button>
            <button onClick={()=>dispath({type: "whisper"})}>whisper</button>
        </>

    );
}
export default Message;