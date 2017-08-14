import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { Observable } from "rxjs/Observable";

platformBrowserDynamic().bootstrapModule(AppModule);


const debuggerOn = true;
Observable.prototype.debug = function(message:string) {
    return this.do(
        nextValue => {
            if (debuggerOn) {
                console.log(message, nextValue)
            }
        },
        error => {
            if (debuggerOn) {
                console.error(message, error)
            }
        },
        () => {
            if (debuggerOn) {
                console.error("Observable completed - ", message)
            }
        }
    );
};


declare module 'rxjs/Observable' {
    interface Observable<T> {
        debug: (...any) => Observable<T>
    }
}