import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesoIdealTabPageRoutingModule } from './peso-ideal-tab-routing.module';

import { PesoIdealTab } from './peso-ideal-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesoIdealTabPageRoutingModule
  ],
  declarations: [PesoIdealTab]
})
export class PesoIdealTabPageModule {}
