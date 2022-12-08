import React from 'react';
import todoList from '../redux/modules/todos';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Card({ todo, deleteHandler, toggleHandler }) {
  // input값을 state로 관리하기 위해
  // 구조분해 할당
  const { id, order, title, content, isDone } = todo;
  return (
    <StCard>
      <div className='content_container'>
        {/* content=todo.title */}
        <span className='todo_title'>{title}</span>
        {/* content=todo.content */}
        <span className='todo_content'>{content}</span>
      </div>
      <div className='btn_container'>
        <Link to={`/${id}`} className='detail_btn'>
          <button className='detail_btn'>상세보기</button>
        </Link>
        {/* id= todo.id  */}
        <StButton className='delete_btn' onClick={() => deleteHandler(id)}>
          삭제하기
          {/* isDone이 true일때 완료하기 버튼이 나오고(toggle기능), isDone이 false일때 취소하기 버튼(toggle)이 나온다 */}
        </StButton>
        {isDone ? (
          <StButton className='confirm_btn' onClick={() => toggleHandler(id)}>
            완료하기
          </StButton>
        ) : (
          <StButton className='cancle_btn' onClick={() => toggleHandler(id)}>
            취소하기
          </StButton>
        )}
      </div>
    </StCard>
  );
}

const StCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px 0;
  padding: 10px;
  box-sizing: border-box;
  background: #0cb5db;
  border-radius: 5px;
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 15%);
  max-width: 300px;
  min-height: 180px;
  .content_container {
    display: flex;
    flex-direction: column;
    gap: 20px 0;
  }
  .btn_container {
    display: flex;
    gap: 0 10px;
  }
  .todo_title {
    font-weight: 600;
    font-size: 1.2rem;
    word-break: break-all;
  }
  .todo_content {
    min-height: 40px;
    word-break: break-all;
  }
`;

const StButton = styled.div`
  padding: 4px 6px;
  font-size: 0.9rem;
  cursor: pointer;
  border-radius: 3px;
  background: white;
  box-shadow: 2px 2px 5px -2px rgb(0 0 0 / 16%);
  cursor: pointer;

  &.confirm_btn {
    background: #60cdde;
    color: #fff;
  }
  &.cancle_btn {
    background: #60cdde;
    color: #ffffff;
  }
`;
