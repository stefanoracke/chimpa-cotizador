import { createReducer, on } from "@ngrx/store";
import { actionAumentarPropuesta, actionClientes, actionIncluidos, actionNoIncluidos, actionOpciones, actionPropsGlobals, actionPropuestaTotal, actionRegion, actionsFaqs, addAmpliar, cargarDatos, loadedDatos, quuitarAmpliar, setActual, setActualPrice } from "../actions/prices.action";


export interface StatePrices {
    aumentarPropuesta?:Array<any>
    opciones?:any[]
    propsPropeusta:any
    propuestaTotal:any
    client:any
    faqs: any,
    region: any,
    includes?:any
    not_includes?:any
    added_service: any[]
    actual:number,
    actualPrice?:any
    loading:boolean
} 

const initialState:StatePrices = {
    loading:true,
    aumentarPropuesta:undefined,
    opciones:undefined,
    propsPropeusta:undefined,
    propuestaTotal:undefined,
    client: undefined,
    faqs:undefined,
    region: undefined,
    added_service:[],
    actual:0
}

export const pricesReducer = createReducer(
    initialState,
    on(cargarDatos, (state, {loading}) => ({ ...state, loading })),
    on(loadedDatos, (state, {loading}) => ({ ...state, loading })),
    on(actionAumentarPropuesta, (state, { aumentarPropuesta }) => ({ ...state, aumentarPropuesta })),
    on(actionOpciones, (state, { opciones }) => ({ ...state, opciones })),
    on(actionPropsGlobals, (state, { propsPropeusta }) => ({ ...state, propsPropeusta })),
    on(actionPropuestaTotal, (state, { propuestaTotal }) => ({ ...state, propuestaTotal })),
    on(actionClientes, (state, { client }) => ({ ...state, client })),
    on(actionsFaqs, (state, { faqs }) => ({ ...state, faqs })),
    on(actionRegion, (state, { region }) => ({ ...state, region })),
    on(actionIncluidos, (state, { includes }) => ({ ...state, includes })),
    on(actionNoIncluidos, (state, { not_includes }) => ({ ...state, not_includes })),
    on(addAmpliar, (state, { added_service }) => ({ ...state, added_service })),
    on(quuitarAmpliar, (state, { added_service }) => ({ ...state, added_service })),
    on(setActual, (state, { actual }) => ({ ...state, actual })),
    on(setActualPrice, (state, { actualPrice }) => ({ ...state, actualPrice })),
)