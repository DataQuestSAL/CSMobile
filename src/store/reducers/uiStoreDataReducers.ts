import { ActionTypes } from './../actions/users.actions';



import { StoreData } from "../store-data";
import { Action } from "@ngrx/store";
import * as _ from 'lodash';


export function storeData(state: StoreData, action: Action): StoreData {
    switch (action.type) {
               
      
        default:
            return state;
    }
}














