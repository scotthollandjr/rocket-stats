import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'goals'
})
export class Goals implements PipeTransform {
  transform(array: Array<string>, args: string): Array<string> {

    if(!array || array === undefined || array.length === 0) return null;
    array.sort((a: any, b: any) => {
      let statA = a.goals / a.games;
      let statB = b.goals / b.games;
      
      if (statA > statB) {
        return -1;
      } else if (statA < statB) {
        return 1;
      } else {
        return 0;
      }
    });

    return array;
  }
}
