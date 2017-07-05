import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoversComponent } from './covers';

@NgModule({
  declarations: [
    CoversComponent,
  ],
  imports: [
    IonicPageModule.forChild(CoversComponent),
  ],
  exports: [
    CoversComponent
  ]
})
export class CoversComponentModule {}
