import { createStore } from "redux";
import { combineReducers } from "redux";
//모듈(todos)을 store에 연결->모듈을 한 개씩 추가할때마다 모듈명만 바꿔서 추가로 적어주기
import todos from "../modules/todos"; 
//중괄호 안에 모듈(todos) 넣기=>모듈을 한 개씩 추가할때마다 모듈명만 바꿔서 추가로 적어주기
const rootReducer = combineReducers({
  todos,
});
const store = createStore(rootReducer);
export default store;