import { ActionTypes } from './../actions/users.actions';
import { UiState, INITIAL_UI_STATE } from "../ui-state";
import { Action } from "@ngrx/store";



export function uiState(state: UiState = INITIAL_UI_STATE, action: Action): UiState {
    debugger
    switch (action.type) {
        case ActionTypes.AUTHENTICATE:
            return Object.assign({}, state, { inProgress: true , inProgressMessage: "Logging In...", error: null})
            //return _.clone(state)
        case ActionTypes.AUTHENTICATE_ERROR:
            return Object.assign({}, state, { inProgress: false, error: action.payload  })
        case ActionTypes.AUTHENTICATE_SUCCESS:
            return Object.assign({}, state, { inProgress: false, error: null })
        case ActionTypes.LOGOUT:
            return Object.assign({}, state, { inProgress: true , inProgressMessage: "Logging out..."})
        default:
            return state;

    }

}