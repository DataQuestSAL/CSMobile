import { AppConfig, APP_CONFIG, ApplicationMode } from './../app/app.config';
import { MockPortfolio } from './mocks/mock-portfolio';
import { Policy } from './../models/policy.model';
import { Portfolio } from './../models/portfolio.model';
import { Observable } from 'rxjs/Observable';
import { Api } from './api.service';
import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class PortflioService {
    private endPoint: string = 'Polcom';
    private Lst_Porfolio: BehaviorSubject<Portfolio[]> = new BehaviorSubject<Portfolio[]>([]);
    private appconfig: AppConfig;

    public portfolio$: Observable<Portfolio[]> = this.Lst_Porfolio.asObservable();

    constructor(public api: Api, 
                @Inject(APP_CONFIG) config: AppConfig) {
        this.appconfig = config;
    }

    getPortfolio(): Observable<Portfolio[]> {
        debugger
        if (this.appconfig.__APPLICATION_MODE == ApplicationMode.ONLINE) {
            this.api.get(this.endPoint + '/Get_Portfolio')
            .map(res => res.json())
            .subscribe( lst => {
                let Lst_Tmp: Portfolio[] = [];
                lst.forEach(port => { Lst_Tmp.push(new Portfolio(port)); });
                this.Lst_Porfolio.next(Lst_Tmp);
            } , err => {
                err => Observable.throw(err)
            })

        } else {
            this.Lst_Porfolio.next(MockPortfolio)           
        }        
        return this.portfolio$;
    }

    getPolicyDetails(Pol_serno: number): Observable<Policy> {
        return this.api.post(this.endPoint + '/Get_PI_Policy_Details',
        {
            "PolSerno": Pol_serno,
            "ROLEID": "I"
        })
        .map(res => res.json())
        .publishLast().refCount();
    }
}