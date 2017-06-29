import { KeysPipe } from './../../pipes/pipe.keys';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PolicyDetailsComponent } from './policy-details';

@NgModule({
  declarations: [
    PolicyDetailsComponent,
    KeysPipe
  ],
  imports: [
    IonicPageModule.forChild(PolicyDetailsComponent),
  ],
  exports: [
    PolicyDetailsComponent
  ]
})
export class PolicyDetailsComponentModule {}
