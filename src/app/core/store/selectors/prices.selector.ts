import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';


export const selectPrices = (state: AppState) => state.prices;



export const selectAmentarPropuesta = createSelector(
    selectPrices,
    (state) => state.aumentarPropuesta
);

export const selectPropsPropuesta = createSelector(
    selectPrices,
    (state) => state.propsPropeusta
);
export const selectOptions = createSelector(
    selectPrices,
    (state) => state.opciones
);
export const selectClient = createSelector(
    selectPrices,
    (state) => state.client
);

 
export const selectRegion = createSelector(
    selectPrices,
    (state) => state.region
);
export const selectFaqs = createSelector(
    selectPrices,
    (state) => state.faqs
);
export const selectIncludes = createSelector(
    selectPrices,
    (state) => state.includes
);
export const selectNotIncludes = createSelector(
    selectPrices,
    (state) => state.not_includes
);
export const selectActual = createSelector(
    selectPrices,
    (state) => state.actual
);
export const selectAdded = createSelector(
    selectPrices,
    (state) => state.added_service
);

export const selectactalPrice = createSelector(
    selectPrices,
    (state)=> state.actualPrice
)

export const selectAllPropuesta = createSelector(
    selectPrices,
    (state) => state.propuestaTotal
)