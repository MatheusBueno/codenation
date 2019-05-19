import axios from "axios";

const API_PATH = "http://localhost:3030/api";

const getRecipesByIngredients = (ingredients, page = 1) => {
  return axios.get(`${API_PATH}?i=${ingredients}&p=${page}`);
};

const getRecipesByName = (name = "", page = 1) => {
  return axios.get(`${API_PATH}?q=${name}&p=${page}`);
};

export { getRecipesByIngredients, getRecipesByName };
