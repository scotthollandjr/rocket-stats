import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ranker'
})
export class Ranker implements PipeTransform {
  transform(array: Array<string>, args: string): Array<string> {

    if(!array || array === undefined || array.length === 0) return null;
    console.log(array)
    array.sort((a: any, b: any) => {
      if (a.goals > b.goals) {
        return -1;
      } else if (a.goals < b.goals) {
        return 1;
      } else {
        return 0;
      }
    });

    return array;
  }
}
