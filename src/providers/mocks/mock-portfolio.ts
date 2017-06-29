import { Portfolio } from './../../models/portfolio.model';
import * as faker from 'faker'

export const MockPortfolio: Portfolio[] = [
    new Portfolio({ Pol_serno: '1', PolicyNo: faker.finance.account(), PolicyType: 'A', HolderName: faker.name.firstName() }),
    new Portfolio({ Pol_serno: '2', PolicyNo: faker.finance.account(), PolicyType: 'A', HolderName: faker.name.firstName() })
    ];