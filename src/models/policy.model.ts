import { Agent } from './agent.model';
export class Policy {
    constructor(private fields?: any) {
        // Quick and dirty extend/assign fields to this model
        for (let f in fields) {
            this[f] = fields[f];
        }
    }
    public Product: string;
    public Policy_No: number;
    public ProductName: string;
    public HolderName: string;
    public Status_Code: string;
    public Inception: Date;
    public Expiry: Date;
    public Cur_Code: string;
    public Agt_code: string;
    public Agt_Phone: string;
    public Agt_Email: string;

    get Agent() : Agent {
        return new Agent({Agt_code: this.Agt_code, Agt_Phone: this.Agt_Phone, Agt_Email: this.Agt_Email});
    }

}
