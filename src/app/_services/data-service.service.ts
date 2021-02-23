import { HttpClient, HttpResponse } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Injectable, Injector } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { badRequest } from '../common/400-error';
import { notFound } from '../common/404-error';
import { allError } from '../common/allError';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(@Inject(String) private url: string, private http: HttpClient) { }


  getData() {
    console.log('getdata in data service works');
    return this.http.get(this.url)
      .pipe(map(Response => Response), catchError(this.errorHandle))
  }

  addData(data: any) {
    return this.http.post("https://reqres.in/api/login", data)
      .pipe(map(Response => Response),
        catchError((this.errorHandle)));
  }

  private errorHandle(error: Response) {
    if (error.status == 404) {
      return throwError(new notFound());
    }

    if (error.status == 400) {
      return throwError(new badRequest());
    }

    return throwError(new allError(error));

  }

}