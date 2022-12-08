import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addList } from '../redux/modules/todos';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

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
      setTitle("");
      setContent("");
    };
    
  return (
    <StAddForm>
      <form className='form_container'>
        <div className='title_wrapper'>
          <span className='title_field'>제목</span>
          <input
            type='text'
            className='content_field'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='content_wrapper'>
          <span className='title_field'>내용</span>
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
    </StAddForm>
  );
}

const StAddForm = styled.div`
  background-color: #0cb5db;
  justify-content: space-between;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  margin: auto;
  max-width: 1200px;
  min-width: 800px;
  .form_container {
    display: flex;
    align-item: center;
    gap: 0 25px;
  }
  .title_field {
    margin-right: 20px;
  }
  .content_field {
    width: 200px;
    height: 30px;
    border: 0px;
    border-radius: 8px;
    margin-right: 10px;
  }
  .title_wrapper {
    display: flex;
    align-item: center;
    width: 100%;
    gap: 0 10px;
  }
  .content_wrapper {
    display: flex;
    align-item: center;
    width: 100%;
    gap: 0 10px;
  }
  .add_btn {
    background-color: #60cdde;
  color: white;
  width: 130px;
  height: 30px;
  border: 0px;
  border-radius: 8px;
  font-weight: bold;
  }
`;
