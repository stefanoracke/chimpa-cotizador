import { createAction, props } from "@ngrx/store";

// action action
export const loadPrices = createAction('[Prices]  Load');


export const cargarDatos = createAction('[Datos] Triggeando Acciones')

export const actionAumentarPropuesta = createAction('[Prices] Aumentar Propuesta array',
    props<{ aumentarPropuesta: Array<any> }>())

export const actionOpciones = createAction(
    '[Prices] Opciones',
    props<{ opciones: any[] }>()
)

export const actionPropsGlobals = createAction(
    '[Prices] Props globales',
    props<{ propsPropeusta: any[] }>()
)
export const actionPropuestaTotal = createAction(
    '[Prices] Propuesta total',
    props<{ propuestaTotal: any }>()
)
export const actionClientes = createAction(
    '[Client] Clients',
    props<{ client: any }>()
)
export const actionRegion = createAction(
    '[Region] Region',
    props<{ region: any }>()
)
export const actionsFaqs = createAction(
    '[Faqs] Faqs',
    props<{ faqs: any }>()
)
export const actionIncluidos = createAction(
    '[Servicios] Incluidos',
    props<{ includes: any }>()
)
export const actionNoIncluidos = createAction(
    '[Servicios] No Incluidos',
    props<{ not_includes: any }>()
)

export const addAmpliar = createAction(
    '[Propuesta] Agregando para ampliar',
    props<{added_service: any[]}>()
)
export const quuitarAmpliar = createAction(
    '[Propuesta] Quitando para ampliar',
    props<{added_service: any[]}>()
)
export const setActual = createAction(
    '[Propuesta] Cambiando actual',
    props<{actual: number}>()
)

export const setActualPrice = createAction(
    '[Prices] Set Prices Actual',
    props<{actualPrice:any}>()
)

export const actionErrir = createAction(
    '[Error] Error ocurrido'
)