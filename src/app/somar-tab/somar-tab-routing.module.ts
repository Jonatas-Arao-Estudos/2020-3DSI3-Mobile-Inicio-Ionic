import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SomarTab } from './somar-tab.page';

const routes: Routes = [
  {
    path: '',
    component: SomarTab,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SomarTabPageRoutingModule {}
