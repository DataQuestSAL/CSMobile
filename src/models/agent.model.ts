export class Agent {
    constructor(private fields: any) {
        // Quick and dirty extend/assign fields to this model
        for (let f in fields) {
            this[f] = fields[f];
        }
    }
    public Agt_code: string;
    public Agt_Phone: string;
    public Agt_Email: string;
}
