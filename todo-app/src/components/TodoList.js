import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Todo from './Todo';
import './TodoList.css';

function TodoList({ todos, toggleComplete, removeTodo }) {
    return (
        <TransitionGroup className="todo-list">
            {todos.map((todo) => (
                <CSSTransition key={todo.id} timeout={500} classNames="fade">
                    <Todo
                        todo={todo}
                        toggleComplete={toggleComplete}
                        removeTodo={removeTodo}
                    />
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
}

export default TodoList;
