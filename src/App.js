
import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import Input from './components/Input';
import Button from './components/Button';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []); 

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputText.trim() !== '') {
      const newTodo = { id: Date.now(), text: inputText, isDone: false };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setInputText('');
      setErrorMessage('');
    } else {
      setErrorMessage('Please add a task');
    }
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const removeAllTodos = () => {
    if (todos.length === 0) {
      setErrorMessage('The list is already clear.');
    } else {
      setTodos([]);
      setErrorMessage('');
    }
  };

  return (
    <div className="App">
      <h1>TODO App</h1>
      <Input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onAddTodo={addTodo}
        errorMessage={errorMessage}
      />
      <TodoList
        todos={todos}
        onRemoveTodo={removeTodo}
        onEditTodo={editTodo}
        onToggleTodo={toggleTodo}
      />
      <Button onClick={removeAllTodos} label="Remove All Todos" />
    </div>
  );
};

export default App;
