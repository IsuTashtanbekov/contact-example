import React from 'react'
import s from './TodoItem.module.css'

export const TodoItem = ({id, complete, todo}) => {
  return (
    <div>
        <input 
            type="checkobox" 
            checked={complete}
        />
        <span>{todo}</span>
        <button>x</button>
    </div>
  )
}
