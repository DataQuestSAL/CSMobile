import { Portfolio } from './../models/portfolio.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { Api } from './api.service';
import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { User } from "../models/user.model";

const UNKNOWN_USER : User = new User({
    "_USER_NAME": ""
})

@Injectable()
export class LoginService {
    private endPoint: string = 'Polcom';

    private userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(UNKNOWN_USER);
    
    user$ : Observable<User> = Observable.of(UNKNOWN_USER);

    constructor(public api: Api) {}

    Authenticate(username,password) : Observable<User>{
        return this.api.post(this.endPoint + '/Authenticate', {"USER_NAME":username,"PASSWORD":password})
            .map(res => res.json())
            .do(user => console.log(user))
            .do(user => this.userSubject.next(user))
            .publishLast().refCount();
    }
}