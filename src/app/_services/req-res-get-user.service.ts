import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataServiceService } from './data-service.service';

@Injectable({
  providedIn: 'root'
})
export class ReqResGetUserService extends DataServiceService {

  constructor(http : HttpClient) {

      super('https://reqres.in/api/users?page=1',http);

   }
}