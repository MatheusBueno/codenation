import { put, call, takeEvery } from 'redux-saga/effects';

import CharacterService from '../../services/characters';
import { Types } from './types';

function* asyncLoadCharacter(action) {
  console.log(`Call sagas`);

  try {
    const response = yield call(CharacterService.getCharacters, action.payload);

    yield put({ type: Types.LOAD_CHARACTER, payload: response });
  } catch (error) {
    console.error(error);
  }
}

export default function* charactersSagas() {
  yield takeEvery(Types.ASYNC_LOAD_CHARACTER, asyncLoadCharacter);
}
