import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ElementRef,
  ViewChild,
  OnChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PropuestaService } from 'src/app/core/services/propuesta.service';

declare var require: any;

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { MatTooltip } from '@angular/material/tooltip';


const htmlToPdfmake = require('html-to-pdfmake');
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

export interface ObjectI {
  tecnicas: FeaturesI[];
  include_svc: FeaturesI[];
  notInclude_svc: FeaturesI[];
  estructura: FeaturesI[];
  functionality: FeaturesI[];
}

export interface FeaturesI {
  created_at: string;
  description: string;
  features_types_id: number;
  id: number;
  name: string | null;
  pivot: any;
  status_id: number;
  updated_at: string;
}

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.scss'],
})
export class CardPriceComponent implements OnInit, OnDestroy {
  @ViewChild('dataToExport') dataToExport!: ElementRef;
  constructor(private propuestaSvc: PropuestaService, private router: Router) {}

  @ViewChild("myTooltip") myTooltip!: MatTooltip
  @ViewChild("dialog") dialog2!:ElementRef 

  link = window.location.href

  public displayTooltip(){
    this.myTooltip.disabled = false;
    this.myTooltip.show()
    setTimeout(() => {
      this.myTooltip.disabled = true;
    }, 1000);
  }

  $: any;
  disabled = true
  showModal() {
    let modal = document.getElementById('overlay')
    if(modal)
    if(modal.style.opacity != '1'){
      modal.style.display = 'flex'
      setTimeout(()=>{
        if(modal)
        modal.style.opacity = '1'
      },100)
    }else{
      modal.style.opacity = '0'
      setTimeout(()=>{
        if(modal)
        modal.style.display = 'none'
      },800)
    }
  }

  
  public downloadAsPDF() {
 
    const pdfTable = this.dataToExport.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html, 
    };
    
    pdfMake.createPdf(documentDefinition).download();
  }
 


  // termina funcion pdf

  @Output() booleanEvent = new EventEmitter<boolean>();
  project_subscription!: Subscription;
  precio!: number;
  show = 0;
  precio_modificado!: any;
  precio_muestra!: number;
  cuotas!: number | undefined;
  tasa!: any;
  propuesta!: any;
  cliente_id!: any;
  precios: any;

  finaciacionobject!: Array<any>;
  formato = (number: any) => {
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
    const rep = '$1,';
    let arr = number.toString().split('.');
    arr[0] = arr[0].replace(exp, rep);
    return arr[1] ? arr.join('.') : arr[0];
  };

  

  showFin(i: number) {
    this.show = i;
    let element = this.finaciacionobject.find((res) => i === res.id);

    if (element?.share) {
      this.tasa = undefined;
      this.precio_muestra = this.precio;
      this.cuotas = element.share;
      this.precio_modificado = this.precio / element.share;
      if (this.cliente_id != 1) {
        this.precio_modificado = this.precio_modificado.toFixed(2);
      }
    } else {
      this.cuotas = undefined;
      this.tasa = undefined;
      this.precio_muestra = this.precio;
    }
    if (element?.descont) {
      this.tasa = element.descont;
      let n = this.tasa;
      let x = 100 - this.tasa;
      this.precio_modificado = (-this.precio * n) / 100;
      this.precio_muestra = (this.precio * x) / 100;
    }
  }

  ngOnInit(): void {
    this.project_subscription = this.propuestaSvc.getPropuesta().subscribe(
      (res) => {
        this.propuesta = res;
        this.booleanEvent.emit(false);
        this.cliente_id = res.clients.regions_id;
        if (res.clients.regions_id == 1) {
          let solidary_usd = res.solidarity_usd;
          this.precio = res.price * solidary_usd;
          this.precio_modificado = res.price * solidary_usd;
          this.precio_muestra = res.price * solidary_usd;
        } else {
          this.precio = res.price;
          this.precio_modificado = res.price;
          this.precio_muestra = res.price;
        }
        this.finaciacionobject = res.payment_types;
      },
      (err) => {
        this.router.navigate(['not-found']);
      }
    );
  }
  ngOnDestroy(): void {
    this.project_subscription.unsubscribe();
  }

  changeTotal(n: number) {
    if (this.finaciacionobject[n].cuotas != 0) {
      this.precio_modificado = Math.round(
        this.precio / this.finaciacionobject[n].cuotas
      );
      this.precio_muestra = this.precio;
    } else {
      this.precio_modificado = this.precio * 0.2;
      this.precio_muestra = this.precio * 0.8;
    }
  }

  onPrint(divName: any) {
    let element = document.getElementById(divName);
    if (element) {
      // var pdf = new jsPDF('p', 'pt', 'letter');
      // pdf.canvas.height = 72 * 11;
      // pdf.canvas.width = 72 * 8.5;

      // pdf.doFormObject(element);

      // pdf.save('test.pdf');
      let printContents = element.innerHTML;
      let originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
    }
  }
}

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./card-price.component.scss'],
})
export class DownloadComponent implements OnInit, OnChanges {
  @Input() precios!: any;

  displayedColumns: string[] = ['descuentos', 'name', 'cuotas', 'total'];
  date = new Date();
  object: ObjectI = {
    tecnicas: [],
    include_svc: [],
    notInclude_svc: [],
    estructura: [],
    functionality: [],
  };

  ngOnInit(): void {
    
  }

  ngOnChanges() {
    
    this.updateValue(this.precios);
  }

  updateValue(res: any) {
    if (res) {

      res.features.forEach((element: any) => {
        
        switch (element.features_types_id) {
          case 1:
            // tecnicas
            this.object.tecnicas.push(element);
            break;
          case 2:
            // Servicios incluidos
            this.object.include_svc.push(element);
            break;
          case 3:
            // Estructura
            this.object.estructura.push(element);
            break;
          case 4:
            // Funcionalidades
            this.object.functionality.push(element);
            break;
          case 5:
            // Servicios no incluidos
            this.object.notInclude_svc.push(element);
            break;
          default:
            break;
        }
      });
     
    }
  }
}


