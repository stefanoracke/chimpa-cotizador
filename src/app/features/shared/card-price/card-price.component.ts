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
import { Observable, Subscription } from 'rxjs';
import { PropuestaService } from 'src/app/core/services/propuesta.service';

declare var require: any;

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { MatTooltip } from '@angular/material/tooltip';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.reducer';
import { selectActual, selectAdded, selectAllPropuesta, selectOptions, selectRegion, selectactalPrice } from 'src/app/core/store/selectors/prices.selector';
import { quuitarAmpliar, setActual, setActualPrice } from 'src/app/core/store/actions/prices.action';


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
  created_at?: string;
  description: string;
  features_types_id: number;
  id: number;
  name: string | null;
  pivot: any;
  status_id: number;
  updated_at?: string;
}

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.scss'],
})
export class CardPriceComponent implements OnInit, OnDestroy {
  @ViewChild('dataToExport') dataToExport!: ElementRef;
  constructor(private propuestaSvc: PropuestaService, private router: Router, private store: Store<AppState>) { }
  @ViewChild("myTooltip") myTooltip!: MatTooltip
  @ViewChild("dialog") dialog2!: ElementRef

  added$?: Subscription
  region$?: Subscription
  region: any
  added: any
  opcionesOb$!: Observable<any>
  opciones$?: Subscription
  opciones: any
  actual$?: Subscription
  actualPrice$?: Subscription
  actualPriceOb$!: Observable<any>
  actualPrice: any
  propestaTotal$?: Subscription

  link = window.location.href
  scrollTo(id: string) {
    let element = document.getElementById(id)
    console.log(element)
    if (element) {
      // Scroll to the element
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  public displayTooltip() {
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
    if (modal)
      if (modal.style.opacity != '1') {
        modal.style.display = 'flex'
        setTimeout(() => {
          if (modal)
            modal.style.opacity = '1'
        }, 100)
      } else {
        modal.style.opacity = '0'
        setTimeout(() => {
          if (modal)
            modal.style.display = 'none'
        }, 800)
      }
  }


  public downloadAsPDF(namePropuesta: string) {

    const pdfTable = this.dataToExport.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = {

      content: html,
    };

    pdfMake.createPdf(documentDefinition).download(`Propuesta Web ${namePropuesta} - Chimpancé.pdf`);
  }



  // termina funcion pdf

  @Output() booleanEvent = new EventEmitter<boolean>();

  project_subscription!: Subscription;
  precioSinModificacion!: any;
  precio!: number;
  show = 0;
  precio_modificado!: any;
  precio_muestra!: number;
  cuotas!: number | undefined;
  tasa!: any;
  propuesta!: any;
  cliente_id!: any;
  precios: any;
  actual!: number


  formato = (number: any) => {
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
    const rep = '$1,';
    let arr = number.toString().split('.');
    arr[0] = arr[0].replace(exp, rep);
    return arr[1] ? arr.join('.') : arr[0];
  };

  dispatchDelete(ev: any) {
    this.added = this.added.filter((item: any) => item !== ev);
    this.store.dispatch(quuitarAmpliar({ added_service: this.added })); // Dispatch action to update the store
    this.changePriceInclude()
  }

  showFin(i: number) {
    this.show = i;
    let element = this.actualPrice.payment_types.find((res: any) => i === res.id);

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
  changePriceInclude() {
    let newPrecio = this.actualPrice
    const totalPrice = this.added.reduce((accumulator: any, currentObject: any) => {
      if (currentObject.price !== undefined) {
        return Number(accumulator) + Number(currentObject.price);
      }
      return accumulator;
    }, 0);
    const allPrice = totalPrice + Number(newPrecio.prop_price)
    this.store.dispatch(setActualPrice({ actualPrice: { ...newPrecio, price: allPrice } }))
  }

  changePrice(newPrice: any) {
    let newPrecio = { ...newPrice, prop_price: newPrice.price }
    const totalPrice = this.added.reduce((accumulator: any, currentObject: any) => {
      if (currentObject.price !== undefined) {
        return Number(accumulator) + Number(currentObject.price);
      }
      return accumulator;
    }, 0);
    const allPrice = totalPrice + Number(newPrecio.prop_price)
    this.store.dispatch(setActualPrice({ actualPrice: { ...newPrecio, price: allPrice } }))
  }

  changeActual(index: number) {
    this.store.dispatch(setActual({ actual: index }))

    this.precioSinModificacion = 
    this.region.id == 1 ? 
    Number(this.opciones[index].price * this.region.solidarity_usd) : 
    Number(this.opciones[index].price)
    
    //Seteando los valores a originales
    this.show = 0
    this.cuotas = undefined
    this.tasa = undefined
    this.changePrice(this.opciones[index])

  }

  changeActualPrice(res: any) {
    this.cliente_id = this.region.id;
    if (this.region.id == 1) {
      let solidary_usd = this.region.solidarity_usd;
      this.precio = res.price * solidary_usd;
      this.precio_modificado = res.price * solidary_usd;
      this.precio_muestra = res.price * solidary_usd;
    } else {
      this.precio = res.price;
      this.precio_modificado = res.price;
      this.precio_muestra = res.price;
    }
  }

  ngOnInit(): void {
    this.added$ = this.store.select(selectAdded).subscribe(res => this.added = res)
    this.opcionesOb$ = this.store.select(selectOptions)
    this.opciones$ = this.store.select(selectOptions).subscribe(res => {
      this.opciones = res
      console.log('opciones', res)
    })
    this.actual$ = this.store.select(selectActual).subscribe(res => this.actual = res)
    this.region$ = this.store.select(selectRegion).subscribe(res => {
      this.region = res
      console.log('region', res)
      this.actualPrice$ = this.store.select(selectactalPrice).subscribe(res => {
        this.changeActualPrice(res)
        this.actualPrice = res
      }
      )
    })
    this.propestaTotal$ = this.store.select(selectAllPropuesta).subscribe(res => {
      console.log("aqui trabajando", res)
      this.propuesta = res
      this.precioSinModificacion = res.region.id == 1 ? Number(res.price * res.solidarity_usd) : Number(res.price)
    })
    this.actualPriceOb$ = this.store.select(selectactalPrice)

  }
  ngOnDestroy(): void {
    this.project_subscription.unsubscribe();
    this.actual$?.unsubscribe()
    this.added$?.unsubscribe()
    this.region$?.unsubscribe()
    this.actualPrice$?.unsubscribe()
    this.opciones$?.unsubscribe()
    this.propestaTotal$?.unsubscribe()
  }

  changeTotal(n: number) {
    if (this.actualPrice.payment_types[n].cuotas != 0) {
      this.precio_modificado = Math.round(
        this.precio / this.actualPrice.payment_types[n].cuotas
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
    console.log(this.precios.services)
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


