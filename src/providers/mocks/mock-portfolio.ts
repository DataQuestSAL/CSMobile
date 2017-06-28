import { Portfolio } from './../../models/portfolio.model';

export const MockPortfolio: Portfolio[] = [
    new Portfolio({ Pol_serno: '1', PolicyNo: 'KYN\\123', PolicyType: 'A', HolderName: 'MockName' }),
    new Portfolio({ Pol_serno: '2', PolicyNo: 'KYN\\456', PolicyType: 'A', HolderName: 'MockName' })
    ];