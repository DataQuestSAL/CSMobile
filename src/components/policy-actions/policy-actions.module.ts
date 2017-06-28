import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PolicyActionsComponent } from './policy-actions';

@NgModule({
  declarations: [
    PolicyActionsComponent,
  ],
  imports: [
    IonicPageModule.forChild(PolicyActionsComponent),
  ],
  exports: [
    PolicyActionsComponent
  ]
})
export class PolicyActionsComponentModule {}
