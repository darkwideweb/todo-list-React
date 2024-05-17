import React from 'react';
import './Todo.css';

function Todo({ todo, toggleComplete, removeTodo }) {
    return (
        <div className={`todo ${todo.completed ? 'completed' : ''}`}>
            <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
            <button onClick={() => removeTodo(todo.id)}>X</button>
        </div>
    );
}

export default Todo;
