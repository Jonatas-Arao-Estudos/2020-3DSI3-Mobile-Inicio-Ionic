import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SomarTab } from './somarTab.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SomarTabPageRoutingModule } from './somarTab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SomarTabPageRoutingModule
  ],
  declarations: [SomarTab]
})
export class SomarTabPageModule {}
