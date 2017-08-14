import { LOGIN_USER } from './../actions';
import { UiState, INITIAL_UI_STATE } from "../ui-state";
import { Action } from "@ngrx/store";



export function uiState(state: UiState = INITIAL_UI_STATE, action: Action): UiState {

    switch (action.type) {

        case LOGIN_USER:

            const newState = Object.assign({}, state);
            return newState;


        default:
            return state;

    }

}












