import { ICartItem } from './../../modeles/book';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(
    arr: any[],
    sortingParam = 'price',
    isIncrease = false
  ): ICartItem[] {
    return arr.sort((a, b): number => {
      if (isIncrease) {
        if (a[sortingParam] > b[sortingParam]) return 1;
        if (a[sortingParam] < b[sortingParam]) return -1;
        return 0;
      } else {
        if (a[sortingParam] < b[sortingParam]) return 1;
        if (a[sortingParam] > b[sortingParam]) return -1;
        return 0;
      }
    });
  }
}
