import { AppErrorHandler } from './common/app-error-handler';
import { ErrorHandler } from '@angular/core';
import { PostService } from '../../services/post.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SignupFormComponent } from './signup-form/signup-form.component';

import { DemoService } from './demo/demo.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './cources.component';
import { DemoComponent } from './demo/demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LeapYearComponent } from './leap-year/leap-year.component';
import { StringLengthComponent } from './string-length/string-length.component';
import { DirectiveComponent } from './directive/directive.component';
import { InputFormatDirective } from './input-format.directive';
import { TemplateFormComponent } from './template-form/template-form.component';
import { HttpComponent } from './http/http.component';
import { HttpExampleComponent } from './http-example/http-example.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RouterComponent } from './router/router.component';
import { SweetAlertDemoComponent } from './sweet-alert-demo/sweet-alert-demo.component';

//import { AsynchronousOperationComponent } from './asynchronous-operation/asynchronous-operation.component';


@NgModule({
  declarations: [
    SignupFormComponent,
    AppComponent,
    CoursesComponent,
    DemoComponent,
    LeapYearComponent,
    StringLengthComponent,
    DirectiveComponent,
    InputFormatDirective,
    TemplateFormComponent,
    HttpComponent,
    HttpExampleComponent,
    ReactiveFormComponent,
    RouterComponent,
    SweetAlertDemoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DemoService,
    PostService,
    { provide : ErrorHandler , useClass : AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
