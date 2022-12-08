import React from 'react';
import Card from './Card';
import { useSelector, useDispatch } from 'react-redux';
import { deleteList, updateList } from '../redux/modules/todos';
import styled from 'styled-components';

export default function TodolistForm() {
  ///3개의 list들고오기
  let globalState = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(deleteList(id));
  };
  const toggleHandler = (id) => {
    dispatch(updateList(id));
  };

  return (
    <StTodoList>
      <div className='todolist_inner'>
      <div className='list_container'>
        <span className='list_title'>Working Todo..🔥 </span>
        <StGrid >
          {/* map함수를 써서 list를 카드 하나하나로(todo 3개) */}
          {globalState.map((todo) => {
            if (!todo.isDone) {
              return (
                <Card
                  key={todo.id}
                  todo={todo}
                  deleteHandler={deleteHandler}
                  toggleHandler={toggleHandler}
                />
              );
            }
          })}
        </StGrid>
      </div>

      <div className='list_container'>
        <span className='list_title'>Done Todo..🥳</span>
        <StGrid >
        {/* map함수를 써서 list를 카드 하나하나로(todo 3개) */}
          {globalState.map((todo) => {
            if (todo.isDone) {
              return (
                <Card
                  key={todo.id}
                  todo={todo}
                  deleteHandler={deleteHandler}
                  toggleHandler={toggleHandler}
                />
              );
            }
          })}
        </StGrid>
      </div>
    </div>
    </StTodoList>
    
  );
}

const StTodoList = styled.div`
  margin: auto;
  max-width: 1200px;
  min-width: 800px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
  .todolist_inner {
    display: flex;
    flex-direction: column;
    gap: 40px 0;
  }
  .list_container {
    display: flex;
    flex-direction: column;
    gap: 30px 0;
  }
  .list_title {
    font-size: 1.7rem;
    font-weight: 600;
  }
`;
const StGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
`;