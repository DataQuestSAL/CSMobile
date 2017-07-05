import { NavParams, AlertController, ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';

import { Agent } from './../../models/agent.model';
/**
 * Generated class for the AgentInfoComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'agent-info',
  templateUrl: 'agent-info.html'
})
export class AgentInfoComponent {


  public Agt: Agent

  constructor(public NavParams: NavParams,
    public ViewCtrl: ViewController,
    private callNumber: CallNumber,
    private alertCtrl: AlertController,
    private emailComposer: EmailComposer) {
    this.Agt = this.NavParams.get("Agent");
  }



  callAgent() {

    let alert = this.alertCtrl.create({
      title: 'Confirm Phone Call',
      message: 'Do you want to call your agent?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Call',
          handler: () => {
            this.ViewCtrl.dismiss();
            this.callNumber.callNumber(this.Agt.Agt_Phone, true)
              .then(() => console.log('Launched dialer!'))
              .catch(() => console.log('Error launching dialer'));

          }
        }
      ]
    });
    alert.present();
  }

  emailAgent() {
    this.emailComposer.isAvailable().then((available: boolean) => {
      //available retruning undefined, see https://github.com/hypery2k/cordova-email-plugin/issues/60
      //if (available) {
        //Now we know we can send
        let email = {
          to: this.Agt.Agt_Email,
          cc: 'erika@mustermann.de',
          bcc: ['john@doe.com', 'jane@doe.com'],
          attachments: [
            'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...'
          ],
          subject: 'Cordova Icons',
          body: 'How are you? Nice greetings from Leipzig',
          isHtml: true
        };

        // Send a text message using default options
        this.emailComposer.open(email);
      //}
    });
  }
}
