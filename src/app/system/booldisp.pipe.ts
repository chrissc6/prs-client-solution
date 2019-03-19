import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booldisp'
})
export class BooldispPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
