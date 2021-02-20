import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCmsComponent } from '../add-cms/add-cms.component';
import { CmsListComponentComponent } from '../cms-list-component/cms-list-component.component';

const routes: Routes = [
  { path: 'add-cms', component: AddCmsComponent },
  { path: 'cms-list', component: CmsListComponentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }