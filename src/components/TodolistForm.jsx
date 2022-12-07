import React from 'react';
import Card from './Card';
import { useSelector, useDispatch } from 'react-redux';
import { deleteList, updateList } from '../redux/modules/todos';

export default function TodolistForm() {
  let globalState = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(deleteList(id));
  };
  const toggleHandler = (id) => {
    dispatch(updateList(id));
  };

  return (
    <div className='todolist_inner'>
      <div className='list_container'>
        <span className='list_title'>Working Todo..🔥 </span>
        <>
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
        </>
      </div>

      <div className='list_container'>
        <span className='list_title'>Done Todo..🥳</span>
        <d>
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
        </d>
      </div>
    </div>
  );
}
