import { MockPolicy } from './mocks/mock-policy-details';
import { Injectable, Inject } from '@angular/core';
import { AppConfig, APP_CONFIG, ApplicationMode } from './../app/app.config';
import { MockPortfolio } from './mocks/mock-portfolio';
import { Policy } from './../models/policy.model';
import { Portfolio } from './../models/portfolio.model';
import { Observable } from 'rxjs/Observable';
import { Api } from './api.service';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class PortflioService {
    private endPoint: string = 'Polcom';
    private Lst_Porfolio: BehaviorSubject<Portfolio[]> = new BehaviorSubject<Portfolio[]>([]);
    
    public portfolio$: Observable<Portfolio[]> = this.Lst_Porfolio.asObservable();

    constructor(public api: Api,
        @Inject(APP_CONFIG) public appconfig: AppConfig) {
    }

    

    getPortfolio(): Observable<Portfolio[]> {
        debugger
        if (this.appconfig.__APPLICATION_MODE == ApplicationMode.ONLINE) {
            this.api.get(this.endPoint + '/Get_Portfolio')
                .map(res => res.json())
                .subscribe(lst => {
                    console.log(lst)
                    let Lst_Tmp: Portfolio[] = [];
                    lst.forEach(port => { Lst_Tmp.push(new Portfolio(port)); });
                    this.Lst_Porfolio.next(Lst_Tmp);
                    console.log(this.Lst_Porfolio.getValue())
                }, err => {
                    err => Observable.throw(err)
                })

        } else {
            this.Lst_Porfolio.next(MockPortfolio)
        }
        return this.portfolio$;
    }

    searchPortfolio(searchTerm: string): Portfolio[] {
        if(searchTerm !== "")
            return this.Lst_Porfolio.getValue().filter(p =>  
                (p.HolderName.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0 || 
                 p.PolicyNo.indexOf(searchTerm) >= 0 )
            )
        else
            return this.Lst_Porfolio.getValue();
    }

    getPolicyDetails(Pol_serno: number): Observable<Policy> {
        if (this.appconfig.__APPLICATION_MODE == ApplicationMode.ONLINE) {
            return this.api.post(this.endPoint + '/Get_PI_Policy_Details',
                {
                    "PolSerno": Pol_serno,
                    "ROLEID": "I"
                })
                .map(res => res.json())
                .publishLast().refCount();
        } else {
            return Observable.of(MockPolicy);
        }

    }
}