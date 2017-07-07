export class User {

    constructor(private fields?: any) {
        // Quick and dirty extend/assign fields to this model
        for (let f in fields) {
            this[f] = fields[f];
        }
    }

    public USER_NAME: string;
    public PASSWORD: string;
    public Is_Authentic: boolean;
    public SESSION_ID: string;

    public DisplayName: string;
}