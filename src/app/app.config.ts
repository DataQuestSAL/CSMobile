import { InjectionToken } from '@angular/core';

export enum ApplicationMode {
    ONLINE = 1,
    OFFLINE = 0
}

export interface AppConfig {
    __APPLICATION_MODE : ApplicationMode;
}

export const APP_DI_CONFIG: AppConfig = {
    //Set to offline when server API not accessible
    __APPLICATION_MODE: ApplicationMode.OFFLINE
}

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');


