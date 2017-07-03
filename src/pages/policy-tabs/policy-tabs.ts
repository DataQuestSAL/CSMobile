import { PolicyDetailsComponent } from './../../components/policy-details/policy-details';
import { PolicyTab } from './../../models/portfolio.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PolicyTabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-policy-tabs',
  templateUrl: 'policy-tabs.html',
})
export class PolicyTabsPage {
  PolicyTabs: PolicyTab[];
  testRootPage: PolicyDetailsComponent;

  __POLICY_TABS_MAP = [
    { tabCode: "DETAILS", icon: "paper", component: PolicyDetailsComponent, params: {"Pol_serno" : this.navParams.get("Pol_serno") } },
    { tabCode: "REGPLAN", component: null, params: null },
    { tabCode: "BNF", component: null, params: null },
    { tabCode: "SOP", component: null, params: null },
    { tabCode: "CONTRIBUTIONS", component: null, params: null },

  ]

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {

    this.PolicyTabs = this.navParams.get("Tabs");
    this.PolicyTabs.forEach(t => {
      var tabNode = this.__POLICY_TABS_MAP.find((tab) => tab.tabCode == t.code)
      t.rootPage = (tabNode ? tabNode.component : null);
      t.params = (tabNode ? tabNode.params : null);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PolicyTabsPage');
  }

  ngOnInit() {


  }

}
