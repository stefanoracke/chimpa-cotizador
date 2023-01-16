import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer-mobile',
  templateUrl: './footer-mobile.component.html',
  styleUrls: ['./footer-mobile.component.scss']
})
export class FooterMobileComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  redirectTo(ruta:string){
    if(ruta == '/'){
      this.router.navigate([ruta,localStorage.getItem('empresa_url')]);
    }else{
      this.router.navigate([localStorage.getItem('empresa_url'),ruta])
      .then(() => {
        window.location.reload();
       
      });  
    }
    
    
  }

}
