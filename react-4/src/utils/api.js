import axios from 'axios';
import md5 from 'crypto-js/md5';

const BASE_URL = 'https://gateway.marvel.com:443';

class Api {
  static get(uri) {
    return axios.get(`${BASE_URL}${uri}`);
  }

  static hash = (timesTemp, publicKey, privateKey) =>
    md5(timesTemp + privateKey + publicKey).toString();
}

export default Api;
