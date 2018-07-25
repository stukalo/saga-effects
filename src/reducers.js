import { combineReducers } from 'redux';

const initialState = [
    'first data item',
    'second data item'
];

const data = (state=initialState, action) => {
   return state;
};

export default combineReducers({
    data
});