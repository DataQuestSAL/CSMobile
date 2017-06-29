import { Policy } from './../../models/policy.model';
import * as faker from 'faker'


export const MockPolicy: Policy = 
    new Policy(
        {
            Agt_code: faker.random.alphaNumeric(3),
            Agt_Email: faker.internet.email(),
            Agt_Phone: faker.phone.phoneNumber("(+961) 3999999"),
            Cur_Code : faker.finance.currencyCode(),
            Expiry: faker.date.future(3),
            HolderName: faker.fake("{{name.suffix}} {{name.firstName}} {{name.lastName}}"),
            Inception: faker.date.past(1),
            Policy_No: faker.random.number({min: 100000, max: 999999}),
            Product: faker.commerce.product(),
            ProductName: faker.commerce.productName()    
        } as Policy)
;