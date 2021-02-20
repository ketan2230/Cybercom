import { CompanyModuleComponent } from './company-module/company-module.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmployeeModuleComponent } from './employee-module/employee-module.component';
import { CMSModuleComponent } from './cmsmodule/cmsmodule.component';
import { HomeComponent } from './home/home.component';  
import { AuthGuard } from './_service/auth-guard.service';  
import { LoginComponent } from './login/login.component';  

const routes: Routes = [
    {  
        path: '',  
        component: LoginComponent,  
        data: {  
          title: 'Login'  
        }
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
    },
    {  
        path: 'home',  
        component: HomeComponent,  
        canActivate: [AuthGuard],  
        data: {  
          title: 'Home'   
        }  
      },  
      {  
        path: 'login',  
        component: LoginComponent,  
        data: {  
          title: 'Login'
        }  
      },   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }