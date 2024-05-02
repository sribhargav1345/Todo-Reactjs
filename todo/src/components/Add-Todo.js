// TodoForm.js
import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
    const [todo, setTodo] = useState({ title: '', description: '', completed: false });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.title.trim() || todo.description.trim()) {
            addTodo(todo);
            setTodo({ title: '', description: '', completed: false });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            <div style={{ display: 'flex', justifyContent:'center', alignItems:'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <div className="m-2" style={{ fontSize: '22px', marginBottom: '10px', color: 'white' }}>
                        <input
                            style={{ border: 'none', background: 'none', height: '3rem', width: '15rem', fontSize: '18px', color: 'white', outline: 'none' }}
                            type="text"
                            value={todo.title}
                            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
                            placeholder="Title"
                        />
                    </div>
                    <div className="m-2" style={{ fontSize: '14px', marginBottom: '10px', color: 'white' }}>
                        <textarea
                            style={{ border: 'none', background: 'none', height: '3rem', width: '15rem', fontSize: '14px', color: 'white', outline: 'none' }}
                            value={todo.description}
                            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
                            placeholder="Description"
                        />
                    </div>
                </div>
                <button type="submit" className="todo-btn" style={{ borderRadius: '5px', height: 'max-content', width: 'auto', marginLeft: '15px' }}>Add Task</button>
            </div>
        </form>
    );
};
