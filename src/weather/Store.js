import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {reducer as weatherReducer} from './weather/';
import thunk from 'redux-thunk';


const reducer=combineReducers({
  weather:weatherReducer
}

);


export default createStore(reducer,{},
  applyMiddleware(thunk)
);
