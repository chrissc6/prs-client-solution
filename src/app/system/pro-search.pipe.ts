import { Pipe, PipeTransform } from '@angular/core';
import{Product} from '../product/product.class';

@Pipe({
  name: 'proSearch'
})
export class ProSearchPipe implements PipeTransform {

  transform(products: Product[], crit: string): Product[] {
    if(crit == "")
    {
      return products;
    }

    let arrOut: Product[] = [];

    for(let v of products)
    {
      if(v.vendor.name.toLowerCase().includes(crit.toLowerCase()))
      {
        arrOut.push(v);
        continue;
      }
      if(v.partNumber.toLowerCase().includes(crit.toLowerCase()))
      {
        arrOut.push(v);
        continue;
      }
      if(v.name.toLowerCase().includes(crit.toLowerCase()))
      {
        arrOut.push(v);
        continue;
      }
      if(v.unit.toLowerCase().includes(crit.toLowerCase()))
      {
        arrOut.push(v);
        continue;
      }
      // if(v.photoPath.toLowerCase().includes(crit.toLowerCase()))
      // {
      //   arrOut.push(v);
      //   continue;
      // }
    }
    return arrOut;
  }

}
