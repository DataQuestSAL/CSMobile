import { Component } from '@angular/core';
export class Portfolio {

    constructor(private fields: any) {
        // Quick and dirty extend/assign fields to this model
        for (let f in fields) {
            if (f == 'Tabs') {
                debugger;
                this.Tabs.push(new PolicyTab('DETAILS','Policy Details'));
                fields[f].split('^').forEach(element => {
                    this.Tabs.push(new PolicyTab(element.split('-')[0],element.split('-')[1]));
                });
            } else {
                this[f] = fields[f];
            }
        }
    }
    
    public Pol_serno : string;
    public PolicyType: string;
    public PolicyNo: string;
    public HolderName: string;
    public Tabs: PolicyTab[] = [];
}

export class PolicyTab {
    constructor(public code: string, 
                public desc: string,
                public rootPage?: Component,
                public params?: any) {
        
    }
}