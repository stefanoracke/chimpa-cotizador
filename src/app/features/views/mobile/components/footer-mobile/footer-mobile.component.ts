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
   
    let nuevaruta = localStorage.getItem('empresa_url')
    console.log(nuevaruta)
    if(ruta == '/'){
      if(nuevaruta)
      this.router.navigateByUrl(nuevaruta);
    }else{
      if(nuevaruta)
      this.router.navigateByUrl(nuevaruta+'/'+ruta)
      .then(() => {
        window.location.reload();
       
      });  
    }
    
    
  }

}
