import { combineReducers } from 'redux'

const initialState = {
  islogin: '',
  testredux:"Hello From Redux"
};


const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, islogin: true };
    case "LOGOUT":
      return { ...state, islogin: false };
    default:
      return state;
  }
};
export default combineReducers({
  reducer
});
