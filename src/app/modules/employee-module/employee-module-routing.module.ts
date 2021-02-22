import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyConfigurationComponent } from '../company-module/company-configuration/company-configuration.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [

  {path: 'addEmployee' , component:AddEmployeeComponent },
 {path: 'employeeList' , component:EmployeeListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeModuleRoutingModule { }