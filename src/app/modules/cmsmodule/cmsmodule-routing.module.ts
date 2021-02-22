import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCmsComponent } from './add-cms/add-cms.component';
import { CmsListComponent } from './cms-list/cms-list.component';

const routes: Routes = [

  {path: 'addCms' , component:AddCmsComponent },
  {path: 'cmsList' , component:CmsListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CMSModuleRoutingModule { }