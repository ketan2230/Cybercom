import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CMSModuleRoutingModule } from './cmsmodule-routing.module';
import { CmsListComponent } from  './cms-list/cms-list.component'
import { CmsComponent } from './cms/cms.component';
import { AddCmsComponent } from './add-cms/add-cms.component';

@NgModule({
  declarations: [

    CmsListComponent,
    CmsComponent,
    AddCmsComponent

  ],
  exports:[
      
  ],
  imports: [
    CommonModule,
    CMSModuleRoutingModule
  ]
})
export class CMSModuleModule { }