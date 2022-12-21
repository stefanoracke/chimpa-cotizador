import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tasaspipe'
})
export class TasaspipePipe implements PipeTransform {

  transform( tasa: any | undefined): string {
    return `${tasa}% OFF`
    
  }

}
