////////////store//////////

import { nanoid } from 'nanoid';

//action객체의 value 지정
const CREATE_TODO = 'todos/CREATE_TODO';
const DELETE_TODO = 'todos/DELETE_TODO';
const READ_TODO = 'todos/READ_TODO';
const UPDATE_TODO = 'todos/UPDATE_TODO';

//action creator(addList, deleteList, readList, updateList)
export const addList = (payload) => {
  return {
    type: CREATE_TODO,
    payload,
  };
};
export const deleteList = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
export const readList = (payload) => {
  return {
    type: READ_TODO,
    payload,
  };
};
export const updateList = (payload) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};

//reducer에 들어갈 initialState
const initialState = {
  todos: [{ id: nanoid(), order: 1, title: '1', content: '1', isDone: false }],
};

// reducer()함수: dispatch를 통해서 전달받은 action객체를 검사하고 조건이 일치했을 때 새로운 state를 만들어내는 함수! (reducer함수->switch->case)
// type과 case가 일치하는 경우에 해당 코드가 실행되고 새로운 state를 반환한다
// 반환된 새로운 state는 새로운 module(todos)의 state가 된다
// 그러면 state를 구독하고 있는 component들은 업데이트된 값을 받을 수 있게 된다
const todoList = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id != action.payload),
      };
    case UPDATE_TODO:
      return {
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload) {
            return todo;
          }
          todo.isDone = !todo.isDone;
          return todo;
        }),
      };

    default:
      return state;
  }
};
export default todoList;
