import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reSearch'
})
export class ReSearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
