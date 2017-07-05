import { CoversComponent } from './../../components/covers/covers';
import { Policy } from './../../models/policy.model';
import { Observable } from 'rxjs/Observable';
import { PortflioService } from './../../providers/portfolio.service';
import { AgentInfoComponent } from './../../components/agent-info/agent-info';
import { Agent } from './../../models/agent.model';
import { PolicyDetailsComponent } from './../../components/policy-details/policy-details';
import { PolicyTab } from './../../models/portfolio.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, NavOptions, PopoverController } from 'ionic-angular';

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
  selectedTab: PolicyTab;
  currentPolicy$: Observable<Policy>;

  __POLICY_TABS_MAP = [
    { tabCode: "DETAILS", icon: "paper", component: PolicyDetailsComponent, params: {"Pol_serno" : this.navParams.get("Pol_serno") } },
    { tabCode: "REGPLAN", icon: "checkmark-circle", component: CoversComponent, params: null },
    { tabCode: "BNF", icon: "people", component: null, params: null },
    { tabCode: "SOP", icon: "cash", component: null, params: null },
    { tabCode: "CONTRIBUTIONS", icon: "logo-usd", component: null, params: null },
    { tabCode: "ADDRESS", icon: "home", component: null, params: null },
  ]

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public PortSvc: PortflioService,
              public popoverCtrl: PopoverController) {

                
    this.PolicyTabs = this.navParams.get("Tabs");
    this.PolicyTabs.forEach(t => {
      var tabNode = this.__POLICY_TABS_MAP.find((tab) => tab.tabCode == t.code)
      t.rootPage = (tabNode ? tabNode.component : null);
      t.params = (tabNode ? tabNode.params : null);
      t.icon = (tabNode ? tabNode.icon : null);
    })

    this.currentPolicy$ = this.PortSvc.currentPolicy$;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PolicyTabsPage');
  }

  ngOnInit() {


  }

  selectTab(t: PolicyTab) {
    console.log(t);
    this.selectedTab = t;
  }

  presentPopover(event: NavOptions, agt: Agent) {
    debugger;
    let popover = this.popoverCtrl.create(AgentInfoComponent, {
      Agent: agt
    });

    popover.present({
      ev: event
    });
  }

}
