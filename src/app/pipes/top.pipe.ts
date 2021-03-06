import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'top'
})
export class Top implements PipeTransform {
  transform(array: Array<string>, args: string): Array<string> {

    if(!array || array === undefined || array.length === 0) return null;
    array.sort((a: any, b: any) => {
      if (a[args] > b[args]) {
        return -1;
      } else if (a[args] < b[args]) {
        return 1;
      } else {
        return 0;
      }
    });

    return array;
  }
}
