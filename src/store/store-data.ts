import { Portfolio } from './../models/portfolio.model';

export interface StoreData {
    portfolio: {[key:number]: Portfolio};
}