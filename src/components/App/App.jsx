import React, { useState } from 'react'
import { InputField } from './InputField/InputField'

export const App = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    const dincrement = () => {
        if(count > -10)
        setCount(count - 1)
    }
    
  return (
    <div>
        <button onClick={ dincrement} > - 
        </button>
        <span
        style = {{color: count % 2 == 0 ? 'green' : 'red'}}>
            {count}
        </span>
        <button
            onClick={ increment}
        > + </button>
        <InputField />
    </div>
  )
}


