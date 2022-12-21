import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cuotaspipe'
})
export class CuotaspipePipe implements PipeTransform {

  transform(value: number | undefined): string {
    
    let string =  value + ' cuotas'
    return string;
  }

}
