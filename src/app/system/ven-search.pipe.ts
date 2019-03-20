import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from '../vendor/vendor.class';

@Pipe({
  name: 'venSearch'
})
export class VenSearchPipe implements PipeTransform {

  transform(vendors: Vendor[], crit: string): Vendor[] {
    if(crit == "")
    {
      return vendors;
    }

    let arrOut: Vendor[] = [];

    for(let v of vendors)
    {
      if(v.code.toLowerCase().includes(crit.toLowerCase()))
      {
        arrOut.push(v);
        continue;
      }
      if(v.name.toLowerCase().includes(crit.toLowerCase()))
      {
        arrOut.push(v);
        continue;
      }
      if(v.address.toLowerCase().includes(crit.toLowerCase()))
      {
        arrOut.push(v);
        continue;
      }
      if(v.city.toLowerCase().includes(crit.toLowerCase()))
      {
        arrOut.push(v);
        continue;
      }
      if(v.state.toLowerCase().includes(crit.toLowerCase()))
      {
        arrOut.push(v);
        continue;
      }
      if(v.zip.toLowerCase().includes(crit.toLowerCase()))
      {
        arrOut.push(v);
        continue;
      }
      if(v.phone.toLowerCase().includes(crit.toLowerCase()))
      {
        arrOut.push(v);
        continue;
      }
      if(v.email.toLowerCase().includes(crit.toLowerCase()))
      {
        arrOut.push(v);
        continue;
      }
    }
    return arrOut;
  }

}
