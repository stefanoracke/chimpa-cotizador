import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PropuestaService {

  constructor(private http: HttpClient, private router: Router) { }


  getLocalProp() {
    let prop = localStorage.getItem('propuesta')
    if (prop)
      return JSON.parse(prop)
  }

  getPropuesta(): Observable<any> {
    const currentURL = window.location.href;

    const urlSegments = currentURL.split('/');

    // Find and extract the desired segment
    let desiredSegment = '';

    for (const segment of urlSegments) {
      if (segment.includes('_')) {
        desiredSegment = segment;
        break;
      }
    }

    const newParts2 = desiredSegment.split("_");


    const empresa = newParts2[newParts2.length - 2]; // "Puro-SRL"
    const proyecto = newParts2[newParts2.length - 1]; // "One-Page"

    return this.http.get<any>(environment.api + `empresa=${empresa}&proyecto=${proyecto}`)
  }

  getFaqs(): Observable<any> {
    return this.http.get<any>('https://cotizador.devtesting.gq/api/api/Faqs')
  }
}
