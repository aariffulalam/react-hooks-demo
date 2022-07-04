import React, {useState, useEffect} from 'react'

const EffectHookCouterOne = () => {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    document.title =`You clicked ${count} times`
  })
  return (
    <>
      <h3>EffectHookCouterOne</h3>
      <button onClick={()=>setCount(pre => pre+1)}>increment</button>
      <h4>{count}</h4>
    </>
  )
}

export default EffectHookCouterOne