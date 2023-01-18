import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private router:Router) { }
  text!:string

  ngOnInit(): void {
    this.foundUrl()
  }

  navigateTo(){
    this.router.navigate([this.foundUrl()])
  }

  foundUrl(){
    let url = this.router.url.slice(1,this.router.url.length)
    let id = url.indexOf('/')

    this.text = url.slice(0,id)
    console.log(this.text)
    return url.slice(0,id)
  }

}
