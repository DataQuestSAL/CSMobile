import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgentInfoPage } from './agent-info';

@NgModule({
  declarations: [
    AgentInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(AgentInfoPage),
  ],
  exports: [
    AgentInfoPage
  ]
})
export class AgentInfoPageModule {}
