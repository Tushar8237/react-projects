import React, { useState } from 'react'

function AddTodoForm({addTodo}) {
    const [newTodo, setNewTodo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newTodo.trim()) {
            addTodo(newTodo)
            setNewTodo('')
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder='Add new task'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type='submit'>Add</button>
    </form>
  )
}

export default AddTodoForm
