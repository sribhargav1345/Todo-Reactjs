// EditTodoForm.js
import React, { useState } from 'react';

export const EditTodoForm = ({ editTodo, task }) => {

    const [taskToUpdate, setTaskToUpdate] = useState(task);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(taskToUpdate, taskToUpdate.id);
    };

    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            <input
                type="text"
                value={taskToUpdate.title}
                onChange={(e) => setTaskToUpdate({ ...taskToUpdate, title: e.target.value })}
                placeholder="Update title"
            />
            <textarea
                value={taskToUpdate.description}
                onChange={(e) => setTaskToUpdate({ ...taskToUpdate, description: e.target.value })}
                placeholder="Update description"
            />
            
            <button type="submit" className="todo-btn">Update Task</button>
        </form>
    );
};
