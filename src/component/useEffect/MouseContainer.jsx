import React, { useState } from 'react'
import EffectMouseEvent from './EffectMouseEvent'

const MouseContainer = () => {
    const [display, setDisplay] = useState(true)   
    return (
        <>
            <h3>MouseContainer</h3>
            <button onClick={()=> setDisplay(!display)}>Display</button>
            {display && <EffectMouseEvent/>}
        </>
    )
};  
export default MouseContainer;