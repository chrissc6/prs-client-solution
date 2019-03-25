import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(objArr: any[], column: string, order: string = 'asc'): any[] {
    if(typeof objArr == 'undefined') return;
    return objArr.sort(compF);

    function compF(top: any, bot: any){
      let t1 = top[column];
      let b1 = bot[column];
      var t;
      var b;
      //let t = top[column];
      if(t1 == null)
      {
        t = "";
      }
      else
      {
        t = top[column].toLowerCase();
      }
      //let b = bot[column]
      if(bot[column] == null)
      {
        b = "";
      }
      else
      {
        b = bot[column].toLowerCase();
      }
      // let t: string= top[column];
      // let b: string= bot[column];

      if(t === b)
      {
        return 0;
      } 
      if(order == 'asc')
      {
        return t > b ? 1 : -1;
      }
      else
      {
        return t < b ? 1 : -1;
      }
    }
  }
  

}
