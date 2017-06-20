import { Portfolio } from './../models/portfolio.model';
import { Observable } from 'rxjs/Observable';
import { Api } from './api.service';
import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { User } from "../models/user.model";

@Injectable()
export class LoginService {
    private endPoint: string = 'Polcom';

    private user: Subject<User> = new Subject<User>();
    
    constructor(public api: Api) {}

    Authenticate(username,password): Observable<User> {
        this.api.post(this.endPoint + '/Authenticate', {"USER_NAME":username,"PASSWORD":password})
            .map(res => res.json())
            .subscribe( data => {
                this.user.next(data);
            } , err => {
                err => Observable.throw(err)
            })
        return this.user.asObservable();
    }
}