import React, {useState} from 'react'

export const StateHookCounterFour = () => {
    const [items, setItems] = useState([])
    function addItem(){
        setItems([...items, {
            id : items.length,
            value : Math.floor(Math.random()*10)+1
        }])
    }
    return (
    <>
        <h3>HookCounterFour</h3>
        <button onClick={addItem}>add Number</button>
        <ul>
            {items.map(item=>{
                return <li key={item.id}>{item.value}</li>
            })}
        </ul>
    </>
  )
}
