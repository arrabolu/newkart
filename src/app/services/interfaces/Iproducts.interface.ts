import { iproduct } from './iproduct.interface';

export class iproducts {
  limit: number;
  products: [iproduct];
  skip: number;
  total: number;
}
