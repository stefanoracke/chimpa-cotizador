import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'download'
})
export class DownloadPipe implements PipeTransform {

  transform(value: any, precio_usd:any, region_id:any,cuotas:any|undefined, descuento:any|undefined ): unknown {
    let precio = value

    if(cuotas!=null){
      precio /= cuotas
    
    }

    if(descuento!=null){
      precio -= precio*descuento/100 
    }

    if(region_id!=1){

      return precio;
    }else{
      precio *= precio_usd
      return precio;
    }



  }

}
