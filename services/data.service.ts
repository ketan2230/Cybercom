import { BadInput } from '../src/app/common/bad-input';
import { NotFoundError } from '../src/app/common/not-found-error';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { appError } from '../src/app/common/AppError';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url : string , private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
    .map(response => response) 
    .pipe(catchError(this.handleError));
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
    .map(response => response) 
    .pipe(catchError(this.handleError));
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
    .map(response => response) 
    .pipe(catchError(this.handleError));
  }
  delete(id) {
    return this.http.delete(this.url + '/' + id)
    .map(response => response)
    .pipe(catchError(this.handleError));
  }
  private handleError(error : Response)
  {
    if (error.status === 400)
      return throwError(new BadInput(error.json()));

    if (error.status === 404)
      return throwError(new NotFoundError());
    
    return throwError(new appError(error.json()));
  }
}