import React, { useState } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

 


  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <div>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
           
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </div>
      ): (
        <div>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
        
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </div>
        
      )
      }
   
    </form>
  );
}

export default TodoForm;