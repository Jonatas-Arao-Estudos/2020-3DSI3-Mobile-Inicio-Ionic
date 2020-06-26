import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SomarTab } from './somar-tab.page';

import { SomarTabPageRoutingModule } from './somar-tab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SomarTabPageRoutingModule
  ],
  declarations: [SomarTab]
})
export class SomarTabPageModule {}
