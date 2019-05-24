import { put, call, takeLatest } from 'redux-saga/effects';

import CharacterService from '../../services/characters';
import { Types } from './types';

function* asyncLoadCharacter(action) {
  try {
    const response = yield call(CharacterService.getCharacters, action.payload);

    yield put({ type: Types.LOAD_CHARACTER_SUCCESS, payload: response.data.data });
  } catch (error) {
    console.error(error);
  }
}

export default function* charactersSagas() {
  yield takeLatest(Types.ASYNC_LOAD_CHARACTER, asyncLoadCharacter);
}
