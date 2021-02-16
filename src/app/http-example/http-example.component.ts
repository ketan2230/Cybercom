import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-http-example',
  templateUrl: './http-example.component.html',
  styleUrls: ['./http-example.component.css']
})
export class HttpExampleComponent implements OnInit {

  posts: any;

  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response;
      }, error => {
        alert('An unexpected error Occur');
        console.log(error);
      });
  }

  constructor(private service: PostService) {
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.service.createPost(post)
      .subscribe(response => {
        post['id'] = response;
        this.posts.splice(0, 0, post);
      }, (error: Response) => {
        if (error.status === 400){}
          //this.form.setErrors(error);
        else {
          alert('An unexpected error Occur');
          console.log(error);
        }
      });
  }

  updatePost(post) {
    this.service.updatePost(post)
      // this.http.put(this.url, JSON.stringify(post))
      .subscribe(response => {
        console.log(response);
      })
  }

  deletePost(post) {
    this.service.deletePost(post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, (error: Response) => {
        if (error.status === 404)
          alert('Already Deleted');
        else {
          alert('An unexpected error Occur');
          console.log(error);
        }
      });
  }

}
