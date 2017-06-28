import { PolicyActionsComponent } from './../policy-actions/policy-actions';
import { PolicyDetailsComponent } from './../policy-details/policy-details';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PortfolioComponent } from './portfolio';

@NgModule({
  declarations: [
    PortfolioComponent,
    PolicyDetailsComponent,
    PolicyActionsComponent
  ],
  imports: [
    IonicPageModule.forChild(PortfolioComponent),
  ],
  exports: [
    PortfolioComponent
  ],
  entryComponents: [
    PolicyDetailsComponent,
    PolicyActionsComponent
  ]
})
export class PortfolioComponentModule {}
