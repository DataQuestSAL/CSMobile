import { Storage } from '@ionic/storage';
import { AppConfig, APP_CONFIG, ApplicationMode} from './../app/app.config';
import { MockUser } from './mocks/mock-user';
import { Observable, BehaviorSubject } from 'rxjs';
import { Api } from './api.service';
import { Injectable, Inject } from '@angular/core';
import { User } from "../models/user.model";

const UNKNOWN_USER: User = new User({
    USER_NAME: "",
    Is_Authentic: false
})

@Injectable()
export class LoginService {
    private endPoint: string = 'Polcom';

    //private userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(UNKNOWN_USER);

    //user$: Observable<User>;// = this.userSubject.asObservable();


    constructor(public api: Api,
        public storage: Storage,
        @Inject(APP_CONFIG) public appconfig: AppConfig) {

    }

    Authenticate(username, password): Observable<User> {
        if (this.appconfig.__APPLICATION_MODE == ApplicationMode.ONLINE) {
            return this.api.post(this.endPoint + '/Authenticate', { "USER_NAME": username, "PASSWORD": password })
                .map(res => res.json())
                .do(user => Observable.of(user))
                .do(user => {
                    debugger;
                    this.api.SESSION_ID = user.SESSION_ID;
                    //TODO: use storage?
                    //this.storage.set('SESSION_ID', user.SESSION_ID);
                })
                .publishLast().refCount();
        } else {
            //return Observable.of(MockUser).delay(1000);
            //simulate error
             return Observable.throw({message: "Login Error: Invalid Username/Password"});//observer.error();
        }
    }

    logout() {
        return new Observable(observer => {
            //this.userSubject.next(UNKNOWN_USER);
            this.api.SESSION_ID = '';
            return observer.next({});
        }).delay(1000);        
    }

    // get LoggedInUser(): User {
    //     return this.userSubject.getValue();
    // }
}