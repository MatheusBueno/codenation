import { marvelApi } from '../../config/config';

export const Types = {
  ASYNC_LOAD_CHARACTER: '[ASYNC CHARACTER LIST] Load a list of chatacters',
  LOAD_CHARACTER: '[CHARACTER LIST] Load a list of chatacters'
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
