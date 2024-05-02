import React, { useState, useEffect } from 'react';
import { Todo } from './todo';
import { TodoForm } from './Add-Todo';
import { v4 as uuidv4 } from 'uuid';
import { EditTodoForm } from './Edit-Todo';

export const TodoWrap = () => {

    const [todos, setTodos] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/todos')            // Mock API
            .then(response => response.json())
            .then(data => setTodos(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    

    const addTodo = (todo) => {
        const newTodo = { id: uuidv4(), ...todo };
        setTodos([...todos, newTodo]);
    };

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

    const toggleComplete = (id) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    const editTodo = (id) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
        );
        setTodos(updatedTodos);
    };

    const editTask = (task, id) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
        );
        setTodos(updatedTodos);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const filteredTodos = todos.filter(todo =>
        todo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        todo.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="TodoWrapper">
            <h1>Welcome to Todo List</h1>
            <TodoForm addTodo={addTodo} />
            <input
                style={{borderRadius:'6px', height:'2rem', marginBottom: '2rem'}}
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search by title or description"
            />
            {filteredTodos.map((todo) =>
                todo.isEditing ? (
                    <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
                ) : (
                    <Todo
                        key={todo.id}
                        task={todo}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                        toggleComplete={toggleComplete}
                    />
                )
            )}
        </div>
    );
};
