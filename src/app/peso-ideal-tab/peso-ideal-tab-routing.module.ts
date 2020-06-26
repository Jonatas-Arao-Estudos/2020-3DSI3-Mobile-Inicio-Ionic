import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesoIdealTab } from './peso-ideal-tab.page';

const routes: Routes = [
  {
    path: '',
    component: PesoIdealTab
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesoIdealTabPageRoutingModule {}
