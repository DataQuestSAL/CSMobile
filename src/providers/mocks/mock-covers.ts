
import { Cover } from './../../models/cover.model';
import * as faker from 'faker'


export const MockCovers: Cover[] = [
    new Cover({
            Code: "DTH",
            ShortDesc: "Death",
            LongDesc: ""
        } as Cover),
        new Cover( {
            Code: "PTD",
            ShortDesc: "Permanent Total Disability",
            LongDesc: ""
        } as Cover),
        new Cover( {
            Code: "WAR",
            ShortDesc: "War",
            LongDesc: ""
        } as Cover)
    ]
;