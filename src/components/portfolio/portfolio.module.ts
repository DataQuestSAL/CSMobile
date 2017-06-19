import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PortfolioComponent } from './portfolio';

@NgModule({
  declarations: [
    PortfolioComponent,
  ],
  imports: [
    IonicPageModule.forChild(PortfolioComponent),
  ],
  exports: [
    PortfolioComponent
  ]
})
export class PortfolioComponentModule {}
