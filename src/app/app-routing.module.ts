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
        path: 'Employee', 
        component: EmployeeModuleComponent,
        children: [
            { path: 'Add-employee', component: AddEmployeeComponent },
            { path: 'Employee-list', component: EmployeeListComponent }
        ]
    },
    { 
        path: 'Cms', 
        component: CMSModuleComponent,
        children: [
            { path: 'Add-cms', component: AddCmsComponent },
            { path: 'Cms-list', component: CmsListComponentComponent }
        ] 
    },
    { 
        path: 'Company', 
        component: CompanyModuleComponent,
        children: [
            { path: 'Company-configuration', component: CompanyConfigurationComponent },
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