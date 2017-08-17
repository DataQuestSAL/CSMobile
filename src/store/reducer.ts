
import { combineReducers } from '@ngrx/store';

import { compose } from "@ngrx/core";
import { uiState } from "./reducers/uiStateReducers";
import { storeData } from "./reducers/uiStoreDataReducers";
import { authState } from "./reducers/authStateReducers";

//export const reducer = compose(combineReducers)({ uiState, storeData });

export function reducer(state, action) {
    return compose(combineReducers)({ uiState, storeData, authState })(state, action);
}