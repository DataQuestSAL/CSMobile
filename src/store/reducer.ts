
import { combineReducers } from '@ngrx/store';

import { compose } from "@ngrx/core";
import { uiState } from "./reducers/uiStateReducers";
import { storeData } from "./reducers/uiStoreDataReducers";

//export const reducer = compose(combineReducers)({ uiState, storeData });

export function reducer(state, action) {
    debugger;
    return compose(combineReducers)({ uiState, storeData })(state, action);
}