import React from 'react';
import todoList from '../redux/modules/todos';

export default function Card({ todo, deleteHandler, toggleHandler }) {
  // input값을 state로 관리하기 위해
  const { id, order, title, content, isDone } = todo;
  return (
    <>
      <div className='content_container'>
        <span className='todo_title'>{title}</span>
        <span className='todo_content'>{content}</span>
      </div>
      <div className='btn_container'>
        <button className='delete_btn' onClick={() => deleteHandler(id)}>
          삭제하기
        </button>
        {isDone ? (
          <button className='confirm_btn' onClick={() => toggleHandler(id)}>
            완료하기
          </button>
        ) : (
          <button className='cancle_btn' onClick={() => toggleHandler(id)}>
            취소하기
          </button>
        )}
      </div>
    </>
  );
}
