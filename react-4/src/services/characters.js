import Api from '../utils/api';

import { marvelApi } from '../config/config';

class CharacterService {
  static getCharacters(payload) {
    const { publicKey, timeStamp, limit, name } = payload;
    const hash = Api.hash(timeStamp, publicKey, marvelApi.privateKey);

    return Api.get(
      `/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&limit=${limit}&name=${name}`
    );
  }
}

export default CharacterService;
