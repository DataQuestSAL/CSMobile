import { ActionTypes } from './../actions/users.actions';
import { AuthState, INITIAL_AUTH_STATE } from './../auth-state';

import { Action } from "@ngrx/store";



export function authState(state: AuthState = INITIAL_AUTH_STATE, action: Action): AuthState {

    switch (action.type) {
        case ActionTypes.AUTHENTICATE:
            debugger;
            return Object.assign({}, state, { inProgress: true, isLoggedIn: false, error: null })
        case ActionTypes.AUTHENTICATE_SUCCESS:
            state = Object.assign({}, state, { isLoggedIn: true })
        // case ActionTypes.LOGIN_SUCCESS: {
        //     return Object.assign({}, state, { inProgress: false, user: action.payload, isLoggedIn: true })
        //}
        default:
            return state;

    }

}












