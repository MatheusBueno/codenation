import { Types } from './types';

const initialState = {
  characterList: []
};

const CharactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOAD_CHARACTER:
      console.log(action);
      return { ...state, characterList: action.payload };
    default:
      return state;
  }
};

export default CharactersReducer;
