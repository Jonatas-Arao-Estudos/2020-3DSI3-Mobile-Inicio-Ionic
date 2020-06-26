import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'calculadora',
    component: TabsPage,
    children: [
      {
        path: 'somar',
        loadChildren: () => import('../somar-tab/somar-tab.module').then(m => m.SomarTabPageModule)
      },
      {
        path: 'imc',
        loadChildren: () => import('../imc-tab/imc-tab.module').then(m => m.ImcTabPageModule)
      },
      {
        path: 'pesoIdeal',
        loadChildren: () => import('../peso-ideal-tab/peso-ideal-tab.module').then(m => m.PesoIdealTabPageModule)
      },
      {
        path: '',
        redirectTo: '/calculadora/somar',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/calculadora/somar',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
