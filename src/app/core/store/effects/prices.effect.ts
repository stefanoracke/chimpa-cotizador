import { Injectable, OnDestroy } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { actionAumentarPropuesta, actionClientes, actionErrir, actionIncluidos, actionNoIncluidos, actionOpciones, actionPropuestaTotal, actionRegion, actionsFaqs, addAmpliar, cargarDatos, setActual, setActualPrice } from "../actions/prices.action";
import { Subscription, catchError, map, mergeMap, of, switchMap, tap } from "rxjs";
import { PropuestaService } from "../../services/propuesta.service";
import { selectAdded, selectOptions, selectactalPrice } from "../selectors/prices.selector";
import { Store } from "@ngrx/store";
import { AppState } from "../app.reducer";

@Injectable()
export class PricesEffect{
  firstSub$!:Subscription
    constructor(
        private actions$: Actions,
        private apiServ: PropuestaService,
    ){ }

    cargarDatos$ = createEffect(
        () => this.actions$.pipe(
            ofType( cargarDatos ),
            mergeMap(() =>
            this.apiServ.getPropuesta()
            .pipe(
              mergeMap((data) => [
                actionAumentarPropuesta({ aumentarPropuesta: data.services }),
                actionOpciones({ opciones: [{name: data.title_option, description: data.description_option, payment_types:data.payment_types, price: data.price},...data.prices] }),
                actionPropuestaTotal({ propuestaTotal: data }),
                actionClientes({ client: data.clients }),
                actionsFaqs({faqs: data.faqs}),
                actionRegion({region: {solidarity_usd:data.solidarity_usd,...data.region}}),
                actionIncluidos({includes: data.features_type[1].content.map((respuesta:any)=>respuesta.description)}),
                actionNoIncluidos({not_includes: data.features_type[4].content.map((respuesta:any)=>respuesta.description)}),
                setActualPrice({actualPrice: 
                  {
                    name: data.title_option, 
                    description: data.description_option, 
                    payment_types:data.payment_types, 
                    price: data.price,
                    prop_price: data.price
                  }
                })
              ]), 
              catchError((err:any)=>{
                console.log('An error has occurred', err)
                return of(actionErrir())
              })
            )
          
          )
        )
    );

    
}