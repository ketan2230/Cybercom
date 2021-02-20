import { CompanyModuleComponent } from './company-module/company-module.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmployeeModuleComponent } from './employee-module/employee-module.component';
import { CMSModuleComponent } from './cmsmodule/cmsmodule.component';

const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/employee', 
        pathMatch: 'full' 
    },
    { 
        path: 'employee', 
        component: EmployeeModuleComponent,
        loadChildren: () => import('./employee-module/employee.module').then(m => m.EmployeeModule),
    },
    { 
        path: 'cms', 
        component: CMSModuleComponent,
        loadChildren: () => import('./cmsmodule/cms.module').then(m => m.CmsModule),
    },
    { 
        path: 'company', 
        component: CompanyModuleComponent,
        loadChildren: () => import('./company-module/company.module').then(m => m.CompanyModule),
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