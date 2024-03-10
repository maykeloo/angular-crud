import { Product } from "../model/Product";
import { Observable } from 'rxjs';

export type ProductRepository = {
  getAllProducts: () => Promise<Observable<Product[]>>;
}