import { Storage } from '@ionic/storage';
import { AppConfig, APP_CONFIG, ApplicationMode} from './../app/app.config';
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


    constructor(public api: Api,
        public storage: Storage,
        @Inject(APP_CONFIG) public appconfig: AppConfig) {

    }

    Authenticate(username, password): Observable<User> {
        if (this.appconfig.__APPLICATION_MODE == ApplicationMode.ONLINE) {
            return this.api.post(this.endPoint + '/Authenticate', { "USER_NAME": username, "PASSWORD": password })
                .map(res => res.json())
                .do(user => this.userSubject.next(user))
                .do(user => {
                    debugger;
                    this.api.SESSION_ID = user.SESSION_ID;
                    //TODO: use storage?
                    //this.storage.set('SESSION_ID', user.SESSION_ID);
                })
                .publishLast().refCount();
        } else {
            this.userSubject.next(MockUser)
            return this.user$;//this.userSubject.asObservable();
        }
    }

    get LoggedInUser(): User {
        return this.userSubject.getValue();
    }
}