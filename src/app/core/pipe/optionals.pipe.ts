import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'optionals'
})
export class OptionalsPipe implements PipeTransform {

  transform( precio: any | undefined, usdSolidary:any, region_id:number|undefined ): any {
    if(precio){
    const formato = (number:any) => {
        const exp = /(\d)(?=(\d{3})+(?!\d))/g;
        const rep = '$1.';
        let arr = number.toString().split('.');
        arr[0] = arr[0].replace(exp,rep);
        return arr[1] ? arr.join(','): arr[0];
      }
      
      if(region_id!=1){
        return formato(Number(precio).toFixed(0))
       }else{
        return formato((precio*usdSolidary).toFixed(0))
       }
      
  }
  else return
}

}
