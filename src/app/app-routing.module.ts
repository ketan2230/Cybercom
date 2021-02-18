import { CompanyConfigurationComponent } from './company-configuration/company-configuration.component';
import { CmsListComponentComponent } from './cms-list-component/cms-list-component.component';
import { AddCmsComponent } from './add-cms/add-cms.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { CompanyModuleComponent } from './company-module/company-module.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { EmployeeModuleComponent } from './employee-module/employee-module.component';
import { CMSModuleComponent } from './cmsmodule/cmsmodule.component';

const routes: Routes = [
    {
        path: '',
        component: EmployeeModuleComponent,
    },
    { 
        path: 'employee', 
        component: EmployeeModuleComponent,
        children: [
            { path: 'add-employee', component: AddEmployeeComponent },
            { path: 'employee-list', component: EmployeeListComponent }
        ]
    },
    { 
        path: 'cms', 
        component: CMSModuleComponent,
        children: [
            { path: 'add-cms', component: AddCmsComponent },
            { path: 'cms-list', component: CmsListComponentComponent }
        ] 
    },
    { 
        path: 'company', 
        component: CompanyModuleComponent,
        children: [
            { path: 'company-configuration', component: CompanyConfigurationComponent },
        ] 
    },
    {
        path: '**',
        component: NotFoundComponent
    }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeeModuleComponent,
                                  CMSModuleComponent,
                                  CompanyModuleComponent,
                                  AddEmployeeComponent,
                                  EmployeeListComponent,
                                  AddCmsComponent,
                                  CmsListComponentComponent,
                                  CompanyConfigurationComponent,
                                  NotFoundComponent]