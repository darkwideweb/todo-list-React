import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm({ addTodo }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text) {
            addTodo(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Добавить новое дело"
            />
            <button type="submit">✓</button>
        </form>
    );
}

export default TodoForm;
