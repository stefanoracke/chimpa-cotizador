import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PropuestaService {

  constructor(private http:HttpClient, private router:Router) { }


  

  getPropuesta():Observable<any>{
    let id= this.router.url.slice(1,this.router.url.length)
    localStorage.setItem('empresa_url',id)
    console.log(id.indexOf('/'))
    if(id.indexOf('/')!=-1){
      id = id.slice(0,id.indexOf('/'))
      localStorage.setItem('empresa_url',id)
    }


    
    return this.http.get<any>(`https://cotizador.devtesting.gq/api/api/Projects?id=${id}`)
  }

  getFaqs():Observable<any>{
    return this.http.get<any>('https://cotizador.devtesting.gq/api/api/Faqs')
  }
}
