import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addList } from '../redux/modules/todos';
import { nanoid } from 'nanoid';

export default function AddForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const submitHandler = () => {
    dispatch(
      addList({
        id: nanoid(),
        order: todos.length + 1,
        title,
        content,
        isDone: false,
      })
    );
  };

  return (
    <form className='form_container'>
      <div className='title_wrapper'>
        <span className='title_field'>제목</span>
        <input
          type='text'
          className='title_field'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='content_wrapper'>
        <span className='content_field'>제목</span>
        <input
          type='text'
          className='content_field'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button type='button' className='add_btn' onClick={submitHandler}>
        추가하기
      </button>
    </form>
  );
}
