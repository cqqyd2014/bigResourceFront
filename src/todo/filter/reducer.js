import {SET_FILTER} from './actionTypes.js';
import {FilterTypes} from '../constants.js';

export default (state=FilterTypes.ALL,action)=>{
  //console.log('filter-reducer');
  switch (action.type) {
    case SET_FILTER:{
      return action.filter;
    }

      break;
    default:
    return state;

  }
}
