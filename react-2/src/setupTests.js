import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faUserCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash, faUserCircle)
configure({ adapter: new Adapter() });

global.localStorageMock = (function () {
  let store = {};
  return {
    getItem: (key) => store[key],
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
    removeItem: (key) => {
      delete store[key];
    }
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });