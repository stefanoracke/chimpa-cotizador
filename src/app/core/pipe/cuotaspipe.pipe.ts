import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cuotaspipe'
})
export class CuotaspipePipe implements PipeTransform {

  transform(value: number | undefined): string {
    if (value == 0) return '20% OFF'
    let string =  value + ' cuotas'
    return string;
  }

}
