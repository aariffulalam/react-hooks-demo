import React, { useState, useEffect } from "react";

const EffectHoolInterval = ()=>{
    const [count, setCount] = useState(0)
    function increage(){
        setCount(count+1)
    }

    useEffect(()=>{
        const go = setInterval(increage, 1000)
        return ()=>{
            clearInterval(go)
        }
    }, [count])

    return (
        <>
            <h3>EffectHookInterval</h3>
            <h4>{count}</h4>
        </>
    )
}
export default EffectHoolInterval;