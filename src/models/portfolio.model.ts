export class Portfolio {

    constructor(private fields: any) {
        // Quick and dirty extend/assign fields to this model
        for (let f in fields) {
            this[f] = fields[f];
        }
    }

    private _PolicyType: string;
    public get PolicyType(): string {
        return this._PolicyType;
    }
    public set PolicyType(v: string) {
        this._PolicyType = v;
    }



    private _PolicyNo: string;
    public get PolicyNo(): string {
        return this._PolicyNo;
    }
    public set PolicyNo(v: string) {
        this._PolicyNo = v;
    }


    private _HolderName: string;
    public get HolderName(): string {
        return this._HolderName;
    }
    public set HolderName(v: string) {
        this._HolderName = v;
    }


}