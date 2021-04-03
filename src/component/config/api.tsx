
import axios from 'axios'
export async function Api(URL : string){
  switch (URL) {
    case 'Product':
      return await axios.get(`https://fakestoreapi.com/products`);
    case 'Rates':
      return await axios.get(`http://api.exchangeratesapi.io/v1/latest?access_key=b4af2163d55b3b9b9c13025bb1641b69`);
  }
}