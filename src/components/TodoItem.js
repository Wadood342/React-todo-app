// src/components/TodoItem.js
import React, { useState } from 'react';
import Button from './Button';

const TodoItem = ({ todo, onRemoveTodo, onEditTodo, onToggleTodo }) => {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim() !== '') {
      onEditTodo(todo.id, editText);
      setEditing(false);
    }
  };

  return (
    <li className="list-group-item">
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          checked={todo.isDone}
          onChange={() => onToggleTodo(todo.id)}
        />
        {editing ? (
          <>
            <input
              type="text"
              className="form-control"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
            <Button onClick={handleEdit} label="Save" />
          </>
        ) : (
          <>
            <span
              className={todo.isDone ? 'text-muted text-decoration-line-through' : ''}
            >
              {todo.text}
            </span>
            <Button onClick={() => setEditing(true)} label="Edit" />
            <Button onClick={() => onRemoveTodo(todo.id)} label="Delete" />
          </>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
