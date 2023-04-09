import { UsersComponent } from './parameter/pages/users/users.component';
import { AccountComponent } from './account/account.component';
import { LayoutModule } from './../layout/layout.module';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BaseComponent } from '../layout/base.component';
import { CompanyComponent } from './parameter/pages/company/company.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routeForPages  = [
    {
        path: 'home',
        component: DashboardComponent
    },

    {
        path: 'parameter',
        children: [
            {
                path: 'company',
                component: CompanyComponent
            },
            {
                path: 'users',
                component: UsersComponent
            }
        ]
    }
]

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },

    {
        path: '',
        component: BaseComponent,
        children:  routeForPages
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MainRoutingModule { }