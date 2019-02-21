import {Shop} from './shop';

export interface Product {
  idProduct: number;
  name: string;
  country: string;
  price: number;
  shops: Shop[];
}
