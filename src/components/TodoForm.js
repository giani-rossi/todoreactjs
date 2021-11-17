import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const change = e => {
    setInput(e.target.value);
  };

  const submit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={submit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={change}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={submit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Hey dude, What is new?'
            value={input}
            onChange={change}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={submit} className='todo-button'>
            Add to your list
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;