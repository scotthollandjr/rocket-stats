import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'winPercentage'
})
export class WinPercentage implements PipeTransform {
  transform(array: Array<string>, args: string): Array<string> {

    if(!array || array === undefined || array.length === 0) return null;
    array.sort((a: any, b: any) => {
      let statA = a.wins / a.games;
      let statB = b.wins / b.games;

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
