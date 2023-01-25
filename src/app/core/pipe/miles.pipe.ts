import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'milespipe'
})
export class MilesPipe implements PipeTransform {

  transform( precio: any | undefined, region_id:number ): any {
    const formato = (number:any) => {
      
      
        const exp = /(\d)(?=(\d{3})+(?!\d))/g;
        const rep = '$1.';
        let arr = number.toString().split('.');
        arr[0] = arr[0].replace(exp,rep);
        return arr[1] ? arr.join('.'): arr[0];
      }

     
        
    
     return formato(precio.toFixed(2))
    
    
  }

}
