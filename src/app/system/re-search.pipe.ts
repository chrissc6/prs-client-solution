import { Pipe, PipeTransform } from '@angular/core';
import{Request} from '../request/request.class';

@Pipe({
  name: 'reSearch'
})
export class ReSearchPipe implements PipeTransform {

  transform(requests: Request[], crit: string): Request[] {
    if(crit == "")
    {
      return requests;
    }

    let arrOut: Request[] = [];

    for(let v of requests)
    {
      if(v.user.username.toLowerCase().includes(crit.toLowerCase()))
      {
        arrOut.push(v);
        continue;
      }
      if(v.description.toLowerCase().includes(crit.toLowerCase()))
      {
        arrOut.push(v);
        continue;
      }
      if(v.deliveryMode.toLowerCase().includes(crit.toLowerCase()))
      {
        arrOut.push(v);
        continue;
      }
      if(v.submittedDate.toLowerCase().includes(crit.toLowerCase()))
      {
        arrOut.push(v);
        continue;
      }
      if(v.status.toLowerCase().includes(crit.toLowerCase()))
      {
        arrOut.push(v);
        continue;
      }
    }
    return arrOut;
  }

}
