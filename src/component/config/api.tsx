import axios from 'axios'
// const URL = 'https://fakestoreapi.com/products';
export async function Api(URL : string){
  return await axios.get(URL);
}