import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private http: HttpClient) { }

  getUsers() {
    try {
      return this.http.get("https://reqres.https://reqres.in/api/users?page=1/api/unknown")
      .map((data: any) => data);
    }
    catch (error) {
      return Observable.throw(error);
    }

  }
}
