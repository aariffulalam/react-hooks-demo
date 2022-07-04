import React, {useState, useEffect} from 'react'

const EffectMouseEvent = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e)=>{
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("useEffected effected")
        window.addEventListener("mousemove", logMousePosition)
    }, [])

    return (
        <>
            <h3>useEffectMouseEvent</h3>
            <div>
                Hooks  X-{x}  Y-{y}
            </div>
        </>
    )
}

export default EffectMouseEvent