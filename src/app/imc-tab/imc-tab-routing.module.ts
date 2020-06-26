import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImcTab } from './imc-tab.page';

const routes: Routes = [
  {
    path: '',
    component: ImcTab
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImcTabPageRoutingModule {}
