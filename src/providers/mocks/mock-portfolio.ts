import { Portfolio, PolicyTab } from './../../models/portfolio.model';
import * as faker from 'faker'

export const MockPortfolio: Portfolio[] = [
    new Portfolio({
        Pol_serno: '1', PolicyNo: faker.finance.account(), PolicyType: 'A', HolderName: faker.name.firstName(),
        Tabs: "REGPLAN-Covers^BNF-Beneficiaries^SOP-Investment Account^CONTRIBUTIONS-Premium & Payments^ADDRESS-Legal Address"
    }),
    new Portfolio({
        Pol_serno: '2', PolicyNo: faker.finance.account(), PolicyType: 'A', HolderName: faker.name.firstName(),
        Tabs: "REGPLAN-Covers^BNF-Beneficiaries^SOP-Investment Account^CONTRIBUTIONS-Premium & Payments^ADDRESS-Legal Address"
    })
];