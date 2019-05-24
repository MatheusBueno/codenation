import { marvelApi } from '../../config/config';

export const Types = {
  ASYNC_LOAD_CHARACTER: '[ASYNC CHARACTER LIST] Load a list of chatacters',
  LOAD_CHARACTER_SUCCESS: '[CHARACTER LIST] Load a list of chatacters',
  SELECT_CHARACTER: '[CHARACTER SELECT] Select Character',
  CHANGE_CHARACTER_NAME: '[CHARACTER DETAIL] Change Character name'
};

export const loadCharacter = name => ({
  type: Types.ASYNC_LOAD_CHARACTER,
  payload: {
    timeStamp: Date.now(),
    publicKey: marvelApi.publicKey,
    limit: 35,
    name
  }
});

export const selectCharacter = characterDetail => ({
  type: Types.SELECT_CHARACTER,
  payload: { characterDetail }
});

export const changeCharacterName = (name, id) => ({
  type: Types.CHANGE_CHARACTER_NAME,
  payload: { name, id }
});
