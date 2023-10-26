import { ActionReducerMap } from "@ngrx/store";
import * as prices from './reducers/prices.reducer'

export interface AppState {
    prices: prices.StatePrices
}

export const appReducers: ActionReducerMap<AppState> = {
    prices: prices.pricesReducer,
}