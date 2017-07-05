import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgentInfoComponent } from './agent-info';

@NgModule({
  declarations: [
    AgentInfoComponent,
  ],
  imports: [
    IonicPageModule.forChild(AgentInfoComponent),
  ],
  exports: [
    AgentInfoComponent
  ]
})
export class AgentInfoComponentModule {}
