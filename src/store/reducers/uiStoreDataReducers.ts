import { ActionTypes } from './../actions/users.actions';



import { StoreData } from "../store-data";
import { Action } from "@ngrx/store";
import * as _ from 'lodash';


export function storeData(state: StoreData, action: Action): StoreData {
    switch (action.type) {
        case ActionTypes.AUTHENTICATE:
            debugger;
            const newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;        
      
        default:
            return state;
    }
}














