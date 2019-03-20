import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'proSearch'
})
export class ProSearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
