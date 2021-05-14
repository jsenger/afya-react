import axios from 'axios';

export const dogApi = axios.create({
  baseURL: 'https://dog.ceo/api/breeds/image/random',
});

export const cocktailApi = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/',
});
