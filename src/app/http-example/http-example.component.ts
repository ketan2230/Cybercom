import { BadInput } from './../common/bad-input';
import { appError } from './../common/AppError';
import { NotFoundError } from './../common/not-found-error';
import { PostService } from '../../../services/post.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-http-example',
  templateUrl: './http-example.component.html',
  styleUrls: ['./http-example.component.css']
})
export class HttpExampleComponent implements OnInit {

  posts: any;

  ngOnInit() {
    this.service.getAll()
      .subscribe(
        posts =>
          this.posts = posts);
  }

  constructor(private service: PostService) {
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.service.create(post)
      .subscribe(response => {
        post['id'] = response;
        this.posts.splice(0, 0, post);
      }, (error: appError) => {
        if (error instanceof BadInput) { }
        //this.form.setErrors(error.originalError);
        else throw error;
      });
  }

  updatePost(post) {
    this.service.update(post)
      // this.http.put(this.url, JSON.stringify(post))
      .subscribe(response => {
        console.log(response);
      });
  }

  deletePost(post) {
    this.service.delete(post.id)
      .subscribe(
        response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, (error: Response) => {
        if (error instanceof NotFoundError)
          alert('Already Deleted');
        else {
          throw error;
        }
      });
  }

}
