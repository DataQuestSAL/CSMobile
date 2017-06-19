import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items : any[] = [];
  constructor(public navCtrl: NavController, public http: Http) {
  
   this.http.get('http://192.168.12.28/WebAPIProtoType/Api/Polcom/Get_Portfolio')
             .map(res  => res.json())
             .subscribe(result => 
             {               
              this.items = result;
              console.log(this.items);
             }
            );
  }

  handleClick(item){    
    alert("Ok, Now we can do whatevver you want with policy: " + item.PolicyNo);
  }


}
