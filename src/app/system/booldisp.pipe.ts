import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booldisp'
})
export class BooldispPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? "Yes" : "No";
  }

}
