import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataServiceService } from './data-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginSuccessService extends DataServiceService{

  constructor(http : HttpClient) {

    super('https://reqres.in/api/login',http);

 }
}