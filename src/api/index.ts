import axios from 'axios';

const API_URL = 'https://swapi.py4e.com/api/';

export const $api = axios.create({
  baseURL: API_URL,
});
