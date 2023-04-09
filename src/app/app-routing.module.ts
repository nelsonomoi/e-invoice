import { AccountComponent } from './modules/account/account.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './layout/base.component';

const routes: Routes = [
  {
    path: 'account', component: AccountComponent,
    loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule)
  },
  {
    path: '',
    loadChildren: () => import('./modules/main.module').then(m => m.MainModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
