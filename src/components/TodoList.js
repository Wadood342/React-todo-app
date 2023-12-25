
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onRemoveTodo, onEditTodo, onToggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemoveTodo={onRemoveTodo}
          onEditTodo={onEditTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
