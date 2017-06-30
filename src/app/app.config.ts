
import { InjectionToken, Component } from '@angular/core';
//import { PolicyDetailsComponent } from './../components/policy-details/policy-details';

export enum ApplicationMode {
    ONLINE = 1,
    OFFLINE = 0
}

export interface AppConfig {
    __APPLICATION_MODE: ApplicationMode;
    //__POLICY_TABS_MAP: [{ tabCode: string, component: Component }]
}

export const APP_DI_CONFIG: AppConfig = {
    //Set to offline when server API not accessible
    __APPLICATION_MODE: ApplicationMode.ONLINE,

}

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

