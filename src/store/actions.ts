import { User } from './../models/user.model';




import {Action} from "@ngrx/store";

export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_IN_PROGRESS = 'LOGIN_IN_PROGRESS';
export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNUP_IN_PROGRESS = 'SIGNUP_IN_PROGRESS';
export const USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export const AUTH_TOKEN_EXPIRED = 'AUTH_TOKEN_EXPIRED';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGOUT_IN_PROGRESS = 'LOGOUT_IN_PROGRESS';
export const LOGOUT_RECEIVED = 'LOGOUT_RECEIVED';


export class LoginUserAction implements  Action {

    readonly type = LOGIN_USER;

    constructor(public payload: {username, password}) {

    }

}