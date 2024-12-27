import React, { createContext } from 'react'
import ParentComponent from './ParentComponent'

export const GrandContext = createContext();

const GarandParantComponent = () => {
    const data = "hello i from grandparent component variable"
  return (
    <div>
        <h1>Grand parent component</h1>
        <GrandContext.Provider value={data}>
        <ParentComponent />
        </GrandContext.Provider>
        
      
    </div>
  )
}

export default GarandParantComponent
