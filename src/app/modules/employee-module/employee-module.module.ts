import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeModuleRoutingModule } from './employee-module-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    AddEmployeeComponent,
    EmployeeListComponent

  ],
  exports:[
    EmployeeComponent,
    AddEmployeeComponent,
    EmployeeListComponent],
    
  imports: [
    CommonModule,
    EmployeeModuleRoutingModule
  ]
})
export class EmployeeModuleModule { }