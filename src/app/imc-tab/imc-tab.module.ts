import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImcTabPageRoutingModule } from './imc-tab-routing.module';

import { ImcTab } from './imc-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImcTabPageRoutingModule
  ],
  declarations: [ImcTab]
})
export class ImcTabPageModule {}
