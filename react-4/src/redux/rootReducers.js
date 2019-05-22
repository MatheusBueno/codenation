/* Modules */
import { combineReducers } from 'redux';

/* Reducers */
import { reducer as formReducer } from 'redux-form';

import CharactersReducer from './characters/reducer';

// all the reducers are in one place
const rootReducers = combineReducers({
  characters: CharactersReducer,
  formReducer
});

export default rootReducers;
