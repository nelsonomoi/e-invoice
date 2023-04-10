import { CustomerComponent } from './customer/customer.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { UsersComponent } from './parameter/pages/users/users.component';
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

        path: 'customer',
        component:CustomerComponent,
        loadChildren: () => import('./customer/customer.module').then((m) => m.CustomerModule)

    },

    {

        path: 'invoice',
        component:InvoiceComponent,
        loadChildren: () => import('./invoice/invoice.module').then((m) => m.InvoiceModule)

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