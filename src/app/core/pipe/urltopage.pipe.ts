import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urltopage'
})
export class UrltopagePipe implements PipeTransform {

  transform(value: string|undefined): string|undefined {
    if(value){return value.slice(8, value.length);}
    return value;
  }

}
