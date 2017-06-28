import { AppConfig, APP_CONFIG, ApplicationMode } from './../app/app.config';
import { MockUser } from './mocks/mock-user';
import { Observable, BehaviorSubject } from 'rxjs';
import { Api } from './api.service';
import { Injectable, Inject } from '@angular/core';
import { User } from "../models/user.model";

const UNKNOWN_USER: User = new User({
    USER_NAME: ""
})

@Injectable()
export class LoginService {
    private endPoint: string = 'Polcom';

    private userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(UNKNOWN_USER);

    user$: Observable<User> = this.userSubject.asObservable();
    appconfig: AppConfig;

    constructor(public api: Api,
        @Inject(APP_CONFIG) config: AppConfig) {
        this.appconfig = config;
    }

    Authenticate(username, password): Observable<User> {
        if (this.appconfig.__APPLICATION_MODE == ApplicationMode.ONLINE) {
            return this.api.post(this.endPoint + '/Authenticate', { "USER_NAME": username, "PASSWORD": password })
                .map(res => res.json())
                .do(user => console.log(user))
                .do(user => this.userSubject.next(user))
                .publishLast().refCount();
        } else {
            this.userSubject.next(MockUser)
            return this.user$;//this.userSubject.asObservable();
        }
    }
}