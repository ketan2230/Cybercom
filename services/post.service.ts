import { BadInput } from '../src/app/common/bad-input';
import { NotFoundError } from '../src/app/common/not-found-error';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { appError } from '../src/app/common/AppError';
import 'rxjs/add/observable/throw';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {

  //private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor( http: HttpClient) {
    super( 'http://jsonplaceholder.typicode.com/posts', http);
  }

 
}
