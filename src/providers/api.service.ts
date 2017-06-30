import { Observable } from 'rxjs/Observable';
import { Injectable, } from '@angular/core';
import { Http, RequestOptions, URLSearchParams, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'
import { Storage } from '@ionic/storage';
import { Toast } from '@ionic-native/toast';
/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  readonly url: string = 'http://192.168.12.28/WebAPIProtoType/Api/';
  public SESSION_ID: string = ""

  constructor(public http: Http, public storage: Storage, public toast: Toast) {

  }

  createAuthorizationHeader(headers: Headers) {
    //debugger
    //TODO: implement storage for session storage? check with Rizk.
    // this.storage.get('SESSION_ID').then((v) => {
    //   headers.append('SESSION_ID', v);
    // })
    headers.append('SESSION_ID', this.SESSION_ID);

  }

  get(endpoint: string, params?: any, options?: RequestOptions) {
    if (!options) {
      options = new RequestOptions();
    }
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    options.headers = headers;
    // Support easy query params for GET requests
    if (params) {
      let p = new URLSearchParams();
      for (let k in params) {
        p.set(k, params[k]);
      }
      // Set the search field if we have params and don't already have
      // a search field set in options.
      options.search = !options.search && p || options.search;
    }

    return this.http.get(this.url + '/' + endpoint, options).catch(err => {
      this.toast.show(err.message, '5000', 'center').subscribe(
        toast => {console.log(toast);}
      );
      return Observable.throw(err) 
    });
  }

  post(endpoint: string, body: any, options?: RequestOptions) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    if (!options) {
      options = new RequestOptions();
    }
    options.headers = headers;

    return this.http.post(this.url + '/' + endpoint, body, options).catch(err => {
      this.toast.show('I\'m a toast', '5000', 'center').subscribe(
        toast => {console.log(toast);}
      );
      return Observable.throw(err)
    });
  }

  put(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.put(this.url + '/' + endpoint, body, options).catch(err => {
      return Observable.throw(err);
    });
  }

  delete(endpoint: string, options?: RequestOptions) {
    return this.http.delete(this.url + '/' + endpoint, options).catch(err => Observable.throw(err));
  }

  patch(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.put(this.url + '/' + endpoint, body, options).catch(err => Observable.throw(err));
  }

  // private handleError(error: Response | any) {
  //   // In a real world app, you might use a remote logging infrastructure
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     error.json().then(body => {
  //       if (!body) {
  //         body = "";
  //       }
  //       const err = body.error || JSON.stringify(body);
  //       errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //     });
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }
}
