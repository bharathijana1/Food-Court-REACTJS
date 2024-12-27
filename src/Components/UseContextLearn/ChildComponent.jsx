import React, { useContext } from 'react';
import { GrandContext } from './GarandParantComponent';


const ChildComponent = () => {
    const value = useContext(GrandContext);
  return (
    <div>
        <h1>child component</h1>
        hello i from child component
        <p>{value}</p>
      
    </div>
  )
}

export default ChildComponent
