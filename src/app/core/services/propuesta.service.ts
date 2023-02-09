import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PropuestaService {

  constructor(private http:HttpClient, private router:Router) { }


  getLocalProp(){
    let prop = localStorage.getItem('propuesta')
    if(prop)
    return JSON.parse(prop)
  }

  getPropuesta():Observable<any>{
    let id= this.router.url.slice(1,this.router.url.length)
    localStorage.setItem('empresa_url',id)
    
    if(id.indexOf('/')!=-1){
      id = id.slice(0,id.indexOf('/'))
      localStorage.setItem('empresa_url',id)
    }
      
    let empresa = id.slice(0,id.indexOf('_'))
    
    let proyecto = id.slice(id.indexOf('_')+1,id.length)
    

    
    return this.http.get<any>(environment.api+`empresa=${empresa}&proyecto=${proyecto}`)
  }

  getFaqs():Observable<any>{
    return this.http.get<any>('https://cotizador.devtesting.gq/api/api/Faqs')
  }
}
