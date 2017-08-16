import { ActionTypes, AuthenticationSuccessAction, AuthenticationErrorAction } from './../actions/users.actions';
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
                .switchMap(action => this.loginSvc.Authenticate(action.payload.username, action.payload.password))
                .debug("data received via the HTTP request")
                .map(user => new AuthenticationSuccessAction({ user: user }))
                .catch(error => Observable.of(new AuthenticationErrorAction({ error: error })));

}