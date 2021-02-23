import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CMSModuleModule } from './modules/cmsmodule/cmsmodule.module';
import { CompanyModuleModule } from './modules/company-module/company-module.module';
import { EmployeeModuleModule } from './modules/employee-module/employee-module.module';
import { HttpClientModule} from '@angular/common/http';
import { ResReqComponent } from './res-req/res-req.component'
import { ReqResGetUserService } from './_services/req-res-get-user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { globalErrorHandler } from './common/global-errorHandler';
import { ReqResLoginComponent } from './res-req-login/res-req-login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ResReqComponent,
    ReqResLoginComponent,
    NavBarComponent,
    HomeComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,  
   CMSModuleModule,
   CompanyModuleModule,
   EmployeeModuleModule,
   BrowserAnimationsModule,
   ReactiveFormsModule
  ],
  providers: [ReqResGetUserService,
    {provide : ErrorHandler , useClass : globalErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }