import React, {useState} from "react";

function HookCounterTwo(){
    const intialCount = 0
    const [count, setCount] = useState(intialCount);

    // this is wrong way to implement a count function
    // function increageFive(){
    //     for (let i=0; i<5; i++){
    //         setCount(count+1)
    //     }
    // }

    function increageFive(){
        for (let i=0; i<5; i++){
            setCount( (pre) =>  {return     pre+1} )
        }
    }

    return (
        <>
            <h4>useState</h4>
            <h5>count {count}</h5>
            <div>
                <button onClick={()=>{setCount(intialCount)}}>reset</button>
                <button onClick={()=>{setCount(pre => pre-1)}}>decreage</button>
                <button onClick={()=>{setCount( pre => pre+1)}}>increage</button>
                <button onClick={increageFive}>increage by 5</button>
            </div>
        </>
    )
}
export default HookCounterTwo;