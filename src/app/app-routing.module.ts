import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddCmsComponent } from './modules/cmsmodule/add-cms/add-cms.component';

import { CmsListComponent } from './modules/cmsmodule/cms-list/cms-list.component';
import { CmsComponent } from './modules/cmsmodule/cms/cms.component';
import { CompanyConfigurationComponent } from './modules/company-module/company-configuration/company-configuration.component';
import { CompanyComponent } from './modules/company-module/company/company.component';
import { AddEmployeeComponent } from './modules/employee-module/add-employee/add-employee.component';
import { EmployeeListComponent } from './modules/employee-module/employee-list/employee-list.component';
import { EmployeeComponent } from './modules/employee-module/employee/employee.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReqResLoginComponent } from './res-req-login/res-req-login.component';
import { ResReqComponent } from './res-req/res-req.component';
import { AuthGuard } from './_services/auth-guard.service';


const routes: Routes = [


  {
    path: 'company',
    component: CompanyComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/company-module/company-module.module').then(m => m.CompanyModuleModule)

  },

  {
    path: 'employee', component: EmployeeComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/employee-module/employee-module.module').then(m => m.EmployeeModuleModule)

  },

  {
    path: 'cms',
    component: CmsComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/cmsmodule/cmsmodule.module').then(m => m.CMSModuleModule)

  },

  { path: 'login', component: ReqResLoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'listUSer', component: ResReqComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }