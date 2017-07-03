import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PortfolioItemComponent } from './portfolio-item';

@NgModule({
  declarations: [
    PortfolioItemComponent,
  ],
  imports: [
    IonicPageModule.forChild(PortfolioItemComponent),
  ],
  exports: [
    PortfolioItemComponent
  ]
})
export class PortfolioItemComponentModule {}
