import React from 'react'
import s from './InputField.module.css'

export const InputField = () => {
    const [todo, setTodo] = React.useState([])
    const [title, setTitle] = React.useState('')

  return (
    <div>
        <input 
            type="text"
            placeholder="type your todo" 
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
            />
        <button>Hello, {title}</button>
    </div>
  )
}
