import { ActionTypes, AuthenticationSuccessAction, AuthenticationErrorAction, LogoutSuccessAction } from './../actions/users.actions';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { LoginService } from './../../providers/login.service';
import { Actions, Effect } from "@ngrx/effects";
import { Injectable } from '@angular/core';

@Injectable()
export class LoginEffects {

        constructor(private actions$: Actions, private loginSvc: LoginService) {

        }

        @Effect() userThreads$: Observable<Action> = this.actions$
                .ofType(ActionTypes.AUTHENTICATE)
                .debug("action received")
                .switchMap(action => this.loginSvc.Authenticate(action.payload.username, action.payload.password)
                        .debug("data received via the HTTP request")
                        .map(user => new AuthenticationSuccessAction(user))
                        .catch(error => Observable.of(new AuthenticationErrorAction(error)))
                        //make sure catch in _inside_ the switchMap else the effect will run only once
                        //see here: https://github.com/ngrx/effects/issues/144
                );

        @Effect()
        logout$ = this.actions$
                .ofType(ActionTypes.LOGOUT)
                .switchMap(action => this.loginSvc.logout())
                .map(user => new LogoutSuccessAction())
}