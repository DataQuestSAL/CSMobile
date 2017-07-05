export class Cover {
    constructor(private fields: any) {
        // Quick and dirty extend/assign fields to this model
        for (let f in fields) {
            this[f] = fields[f];
        }
    }
    public Code: string;
    public ShortDesc: string;
    public LongDesc: string;
    public Covered: boolean;
}
