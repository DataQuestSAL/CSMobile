import { User } from '../../models/user.model';




import { Action } from "@ngrx/store";
import { type } from "../../helpers/utils";

export const ActionTypes = {
  AUTHENTICATE: type("[users] Authenticate"),
  AUTHENTICATE_ERROR: type("[users] Authentication error"),
  AUTHENTICATE_SUCCESS: type("[users] Authentication success"),
  AUTHENTICATED: type("[users] Authenticated"),
  AUTHENTICATED_ERROR: type("[users] Authenticated error"),
  AUTHENTICATED_SUCCESS: type("[users] Authenticated success"),
  LOGOUT: type("[users] Sign off"),
  LOGOUT_ERROR: type("[users] Sign off error"),
  LOGOUT_SUCCESS: type("[users] Sign off success"),
  SIGN_UP: type("[users] Sign up"),
  SIGN_UP_ERROR: type("[users] Sign up error"),
  SIGN_UP_SUCCESS: type("[users] Sign up success")
};


export class AuthenticateAction implements Action {
  readonly type = ActionTypes.AUTHENTICATE;
  constructor(public payload: { username, password }) {

  }
}


export class AuthenticationErrorAction implements Action {
  public type: string = ActionTypes.AUTHENTICATE_ERROR;

  constructor(public payload?: any) { }
}

export class AuthenticationSuccessAction implements Action {
  public type: string = ActionTypes.AUTHENTICATE_SUCCESS;

  constructor(public payload: User ) { }
}

export class LogoutAction implements Action {
  readonly type = ActionTypes.LOGOUT;
  constructor(public payload?: any) {

  }
}

export class LogoutSuccessAction implements Action {
  readonly type = ActionTypes.LOGOUT_SUCCESS;
  constructor() {
  }
}
