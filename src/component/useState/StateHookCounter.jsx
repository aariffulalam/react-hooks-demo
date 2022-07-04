import React, {useState} from "react";

function StateHookCounter(){
    const [state, setState] = useState(0)
    return (
        <>
            <h4>useState</h4>
            <button onClick={()=>setState(state+1)}>count {state}</button>
        </>
    )
};
export default StateHookCounter;