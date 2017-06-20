export class User {

    constructor(private fields: any) {
        // Quick and dirty extend/assign fields to this model
        for (let f in fields) {
            this[f] = fields[f];
        }
    }


    private _USER_NAME: string;
    public get USER_NAME(): string {
        return this._USER_NAME;
    }
    public set USER_NAME(v: string) {
        this._USER_NAME = v;
    }


    private _PASSWORD: string;
    public get PASSWORD(): string {
        return this._PASSWORD;
    }
    public set PASSWORD(v: string) {
        this._PASSWORD = v;
    }


    private _Is_Authentic: boolean;
    public get Is_Authentic(): boolean {
        return this._Is_Authentic;
    }
    public set Is_Authentic(v: boolean) {
        this._Is_Authentic = v;
    }



}