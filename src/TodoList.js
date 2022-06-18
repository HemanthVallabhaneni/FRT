import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import axios from 'axios'

function TodoList() {

  // const getData = async () => {
  //   const response = await fetch("http://localhost:4000/posts/get");
  //   const jsonData = await response.json();
  //   console.log(jsonData)
  // };

  useEffect(() => {
    // fetch('http://localhost:4000/posts/get')
    // .then(response => response.json())
    // .then((data) => {console.log(data);setTodos(data)});

    axios.get('http://localhost:4000/posts/get')
      .then(response => {
        console.log(response);
      });
  })

  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text) {
      return;
    }


    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task: todo.text })
    };

  fetch('http://localhost:4000/posts', requestOptions)
      .then(async response => console.log(response.json()))
      .then(async data => console.log(data));






    const newTodos = [todo, ...todos];

    setTodos(newTodos);

  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>

  );
}

export default TodoList;