import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.model';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(products: Product[], searchTerm: string | null): Product[] {
    if (searchTerm == null) {
      return products;
    }
    return products.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
