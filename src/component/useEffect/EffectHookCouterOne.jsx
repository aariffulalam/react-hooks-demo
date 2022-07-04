import React, {useState, useEffect} from 'react'

const EffectHookCouterOne = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  useEffect(()=>{
    console.log("count edited")
    document.title =`You clicked ${count} times`
  },[count])
  return (
    <>
      <h3>EffectHookCouterOne</h3>
      <input type="text" vlaue={name} onChange={(e)=> setName(e.target.value)} />
      <button onClick={()=>setCount(pre => pre+1)}>increment {count}</button>
    </>
  )
}

export default EffectHookCouterOne