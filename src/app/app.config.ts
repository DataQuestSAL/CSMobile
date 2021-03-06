
import { InjectionToken } from '@angular/core';
//import { PolicyDetailsComponent } from './../components/policy-details/policy-details';

export enum ApplicationMode { OFFLINE,ONLINE }

export interface AppConfig {
    __APPLICATION_MODE: ApplicationMode;
    //__POLICY_TABS_MAP: [{ tabCode: string, component: Component }]
}

export const APP_DI_CONFIG: AppConfig = {
    //Set to offline when server API not accessible
    __APPLICATION_MODE: ApplicationMode.OFFLINE,

}

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

