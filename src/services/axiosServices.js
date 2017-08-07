import axios from 'axios';

export function getProducts(gender, category) {
  return axios.get(`/${gender}/${category}`).then( products => products.data );
};
