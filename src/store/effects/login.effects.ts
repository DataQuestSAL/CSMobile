import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { LOGIN_USER } from './../actions';
import { LoginService } from './../../providers/login.service';
import { Actions, Effect } from "@ngrx/effects";
import { Injectable } from '@angular/core';

@Injectable()
export class LoginEffects {

        constructor(private actions$: Actions, private loginSvc: LoginService) {

        }

        @Effect() userThreads$: Observable<Action> = this.actions$
                .ofType(LOGIN_USER)
                .debug("action received")
                .switchMap(action => this.loginSvc.Authenticate(action.payload.username, action.payload.password))
                .debug("data received via the HTTP request")
                .map(allUserData => new UserThreadsLoadedAction(allUserData));

}