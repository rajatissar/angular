import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { UserService } from './user.service';
import { PostsService } from './posts.service';
import { ModalService } from './modal.service';
import { UploadService } from './upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('input1') input1: ElementRef;
  @ViewChild('fileUpload', { static: false }) fileUpload: ElementRef; files = [];

  title = 'Angular';
  string1 = 'Rajat';
  array1 = [1, 2, 3, 4];
  object1 = {
    first_name: 'Rajat', last_name: 'Kumar'
  };
  disabled = false;
  showHiddenText = true;
  color = 'green1';
  persons = [
    { name: 'Rajat', email: 'rajat.kumar@daffodilsw.com' },
    { name: 'Sherlock', email: 'sherlock@daffodilsw.com' }
  ];
  heros = ['hulk', 'thor', 'superman', 'batman'];
  model = {
    left: true,
    middle: false,
    right: false
  };
  posts: Array<object>;
  postsCallAPIWithService: Array<object>;
  strPipe = 'hello';
  datePipe = new Date();
  user1 = {
    email: 'rajat.kumar@daffodilsw.com',
    password: 123456
  };
  ReactiveForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(8)])
  });
  url = 'https://jsonplaceholder.typicode.com';
  url2 = 'http://localhost:3000';
  numbers: number[] = [];
  username = 'Rajat';
  dataFromChildToParent: string;
  dataFromChildToParent2: string;


  constructor(
    private http: HttpClient,
    private userData: UserService,
    private postData: PostsService,
    private modalData: ModalService,
    private uploadService: UploadService
  ) { }

  onInit(): void {
  }

  getTitle() {
    return this.title;
  }

  callGETAPI() {
    this.http.get<[]>(`${this.url}/posts`)
      .subscribe((data) => {
        console.log('callGETAPI data ->>', data);
        this.posts = data;
      });
  }

  click_fun(parm1) {
    console.log('click_fun ->>', parm1);
  }

  mouseenter_fun(parm1) {
    console.log('mouseenter_fun ->>', parm1);
  }

  on_key_press(event) {
    console.log('on_key_press', event.target.value);
  }

  getTextBoxValue(item) {
    console.log('getTextBoxValue', item.value);
  }

  on_form_submit(formData) {
    console.log('formData', formData);
  }

  on_change_color() {
    if (this.color === 'green') {
      this.color = 'yellow';
    } else {
      this.color = 'green';
    }
  }

  pass_data_from_child_to_parent(data) {
    console.log('data from child to parent ->>', data);
    this.dataFromChildToParent = JSON.parse(JSON.stringify(data));
  }

  passDataFromChildToParent2(data) {
    this.dataFromChildToParent2 = JSON.parse(JSON.stringify(data));
  }

  onViewChild() {
    console.log('onViewChild ->>', this.input1.nativeElement.value);
  }

  onTemplateDrivenFormSubmit(data) {
    console.log('Template Driven Form Data ->> ', data);
    this.http.post(`${this.url2}/users`, data)
      .subscribe((result) => {
        console.log('Template Driven Form result ->>', result);
      });
  }

  call_service_method() {
    this.userData.get_data('Data from component to service');
  }

  call_api_with_service() {
    this.postData.getPosts()
      .subscribe((result) => {
        console.log('call_api_with_service -> result ->>', result);
        this.postsCallAPIWithService = result;
      });
  }

  callModalWithInterface() {
    const data = this.modalData.getData();
    console.log('Call Modal With Interface ->>', data);
  }

  onReactiveFormSubmit() {
    console.log('ReactiveForm Data', this.ReactiveForm.value);
  }

  get email2() {
    return this.ReactiveForm.get('email');
  }

  get password2() {
    return this.ReactiveForm.get('password');
  }

  uploadFile(file) {
    console.log('uploadFile -> file ->>', file);
    const formData = new FormData();
    formData.append('file', file.data);
    file.inProgress = true;

    this.uploadService.upload(formData).pipe(
      map(event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            file.progress = Math.round(event.loaded * 100 / event.total);
            break;
          case HttpEventType.Response:
            return event;
        }
      }),
      catchError((error: HttpErrorResponse) => {
        file.inProgress = false;
        return of(`${file.data.name} upload failed.`);
      }))
      .subscribe((event: any) => {
        if (typeof (event) === 'object') {
          console.log('file_upload result ->>', event.body);
        }
      });
  }

  uploadFiles() {
    this.fileUpload.nativeElement.value = '';
    this.files.forEach(file => {
      this.uploadFile(file);
    });
  }

  onImageUpload() {
    const fileUpload = this.fileUpload.nativeElement;
    console.log('fileUpload nativeElement ->>', fileUpload);
    fileUpload.onchange = () => {
      // tslint:disable-next-line: prefer-for-of
      for (let index = 0; index < fileUpload.files.length; index++) {
        const file = fileUpload.files[index];
        this.files.push({ data: file, inProgress: false, progress: 0 });
      }
      this.uploadFiles();
    };
    fileUpload.click();
  }

  generateVirtualScroll() {
    const numbers = [];
    for (let index = 0; index < 10000; index++) {
      numbers.push(index);
    }
    this.numbers = [...numbers];
  }

  updateHeroes() {
    this.heros.push('new hero');
    this.heros = this.heros.slice();
  }
}
