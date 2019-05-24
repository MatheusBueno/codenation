import { Types } from './types';

const initialState = {
  characterList: [],
  characterSelected: null
};

const CharactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOAD_CHARACTER_SUCCESS:
      return { ...state, characterList: action.payload.results };
    case Types.SELECT_CHARACTER:
      return { ...state, characterSelected: action.payload.characterDetail };
    case Types.CHANGE_CHARACTER_NAME:
      return {
        ...state,
        characterList: state.characterList.map(character =>
          character.id === action.payload.id
            ? { ...character, name: action.payload.name }
            : character
        ),
        characterSelected: { ...state.characterSelected, name: action.payload.name }
      };
    default:
      return state;
  }
};

export default CharactersReducer;
