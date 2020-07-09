import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';

import { UserService } from '../../services/user.service';
import { ModalService } from '../../services/modal.service';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  url = 'https://jsonplaceholder.typicode.com';
  posts: Array<object>;
  postsCallAPIWithService: Array<object>;

  constructor(
    private http: HttpClient,
    private userData: UserService,
    private modalData: ModalService,
    private postData: PostsService
  ) { }

  ngOnInit(): void {
  }

  callServiceMethod() {
    this.userData.getData('Data from component to service');
  }

  callServiceMethodWithInterface() {
    const data = this.modalData.getData();
    console.log('callServiceMethodWithInterface ->>', data);
  }

  callGETAPIWithoutUsingService() {
    this.http.get<[]>(`${this.url}/posts`)
      .subscribe((data) => {
        console.log('callGETAPIWithoutUsingService data ->>', data);
        this.posts = data;
      });
  }

  callRESTAPIByUsingService() {
    this.postData.getPosts()
      .subscribe((result) => {
        console.log('callRESTAPIByUsingService -> result ->>', result);
        this.postsCallAPIWithService = result;
      });
  }

}
