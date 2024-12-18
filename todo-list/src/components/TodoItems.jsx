import React, { useState } from "react";

function TodoItems({ todo, toggleComplete, deleteTodo, editTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEdit = () => {
        if (isEditing) {
            editTodo(todo.id, newText);
        } else {
            setIsEditing(!isEditing);
        }
    };
    return (
        <li>
            {isEditing ? (
                <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    style={{ color : "black"}}
                />
            ) : (
                <span
                    style={{
                        textDecoration: todo.complete ? "line-through" : "none",
                    }}
                >
                    {todo.text}
                </span>
            )}
            <button onClick={() => toggleComplete(todo.id)}>
                {todo.complete ? 'Undo' : 'Complete'}
            </button>
            <button onClick={handleEdit}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    );
}

export default TodoItems;
