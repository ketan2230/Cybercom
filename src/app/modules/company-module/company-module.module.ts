import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyModuleRoutingModule } from './company-module-routing.module';
import { CompanyConfigurationComponent } from './company-configuration/company-configuration.component';
import { CompanyComponent } from './company/company.component';


@NgModule({
  declarations: [
    CompanyComponent,
    CompanyConfigurationComponent

  ],
  exports:[
    CompanyComponent,
    CompanyConfigurationComponent
  ],
  imports: [
    CommonModule,
    CompanyModuleRoutingModule
  ]
})
export class CompanyModuleModule { }