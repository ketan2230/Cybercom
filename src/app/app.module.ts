import { PostService } from './post.service';
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
    {}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
