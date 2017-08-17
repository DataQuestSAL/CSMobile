import { User } from './../models/user.model';
import { Portfolio } from './../models/portfolio.model';

export interface StoreData {
    portfolio: { [key: number]: Portfolio };
}

export const INITIAL_STORE_DATA: StoreData = {
    portfolio: {}
};