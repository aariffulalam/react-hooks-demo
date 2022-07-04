import React, {useState} from 'react'

export const HookCounterThree = () => {
    const [name, setName] = useState({
        firstName : "",
        lastName : ""
    });
  return (
    <>
        <h3>HookCounterThree</h3>
        <input type="text" value={name.firstName} onChange={(e)=> setName({...name, firstName: e.target.value})} />
        <input type="text" value={name.lastName} onChange={(e) => setName({...name, lastName:e.target.value})} />
        <div>
            <h4>{name.firstName}</h4>
            <h4>{name.lastName}</h4>
        </div>
    </>
    // in class based usestate marge object bydefault but in function based we need to mearged manually, like this {...name, lastName:e.target.value}
  )
};
export default HookCounterThree;