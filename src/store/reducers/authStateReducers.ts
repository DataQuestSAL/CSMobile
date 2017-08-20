import { ActionTypes } from './../actions/users.actions';
import { AuthState, INITIAL_AUTH_STATE } from './../auth-state';

import { Action } from "@ngrx/store";

import * as _ from "lodash"

export function authState(state: AuthState = INITIAL_AUTH_STATE, action: Action): AuthState {
    debugger
    switch (action.type) {
        case ActionTypes.AUTHENTICATE:
            return Object.assign({}, state, { inProgress: true, isLoggedIn: false, error: null })
            //return _.clone(state)
        case ActionTypes.AUTHENTICATE_SUCCESS:
            return Object.assign({}, state, { inProgress: false, isLoggedIn: true, user: action.payload })
        case ActionTypes.AUTHENTICATE_ERROR:
            return Object.assign({}, state, { inProgress: false, isLoggedIn: false })
        case ActionTypes.LOGOUT:
            return Object.assign({}, state, { inProgress: true })
        case ActionTypes.LOGOUT_SUCCESS: {
            return Object.assign({}, INITIAL_AUTH_STATE)
        }
        default:
            return state;

    }

}












