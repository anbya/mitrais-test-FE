import { combineReducers } from 'redux'

const initialState = {
  formState: 'true',
  toolTipmobilenumber: 'hidden',
  toolTipemail: 'hidden',
  testredux:"Hello From Redux"
};


const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "MOBILENUMBERERROR":
      return { ...state, toolTipmobilenumber: 'visible' };
    case "MOBILENUMBERFINE":
      return { ...state, toolTipmobilenumber: 'hidden' };
    case "EMAILERROR":
      return { ...state, toolTipemail: 'visible' };
    case "EMAILFINE":
      return { ...state, toolTipemail: 'hidden' };
    default:
      return state;
  }
};
export default combineReducers({
  reducer
});
