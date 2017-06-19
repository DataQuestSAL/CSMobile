import { Portfolio } from './../models/portfolio.model';
import { Observable } from 'rxjs/Observable';
import { Api } from './api.service';
import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

@Injectable()
export class PortflioService {
    private endPoint: string = 'Polcom';

    private Lst_Porfolio: Subject<Portfolio[]> = new Subject<Portfolio[]>();
    
    constructor(public api: Api) {

    }

    get CurrentPortfolio(): Observable<Portfolio[]> {
        return this.Lst_Porfolio.asObservable();
    }

    getPortfolio(): Observable<Portfolio[]> {
        this.api.get(this.endPoint + '/Get_Portfolio')
            .map(res => res.json())
            .subscribe( lst => {
                let Lst_Tmp: Portfolio[] = [];
                lst.forEach(port => { Lst_Tmp.push(new Portfolio(port)); });
                this.Lst_Porfolio.next(Lst_Tmp);
            } , err => {
                err => Observable.throw(err)
            })

        return this.CurrentPortfolio;
    }
}