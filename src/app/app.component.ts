import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// services
import { UserService } from './services/user.service';
import { PostsService } from './services/posts.service';
import { ModalService } from './services/modal.service';
import { UploadService } from './services/upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('input1') input1: ElementRef;
  @ViewChild('fileUpload', { static: false }) fileUpload: ElementRef;

  files = [];
  uploadedImages = [];

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

  clickEventBinding(param1: string) {
    console.log('clickEventBinding ->>', param1);
  }

  mouseenterEventBinding(param1: string) {
    console.log('mouseenterEventBinding ->>', param1);
  }

  keyupEventBinding(event) {
    console.log('keyupEventBinding ->>', event.target.value);
  }

  getTextBoxValue(item) {
    console.log('getTextBoxValue ->>', item.value);
  }

  changeColor() {
    if (this.color === 'green') {
      this.color = 'yellow';
    } else {
      this.color = 'green';
    }
  }

  passDataFromChildToParent(data) {
    console.log('data from child to parent ->>', data);
    this.dataFromChildToParent = JSON.parse(JSON.stringify(data));
  }

  passDataFromChildToParent2(data) {
    this.dataFromChildToParent2 = JSON.parse(JSON.stringify(data));
  }

  onViewChild() {
    console.log('onViewChild ->>', this.input1.nativeElement.value);
  }

  // service methods starts here
  callServiceMethod() {
    this.userData.get_data('Data from component to service');
  }

  callServiceMethodWithInterface() {
    const data = this.modalData.getData();
    console.log('callGETAPIWithoutUsingService ->>', data);
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
  // service methods ends here

  // Form methods starts here
  onNGFormSubmit(formData) {
    console.log('formData', formData);
  }

  onTemplateDrivenFormSubmit(data) {
    console.log('Template Driven Form Data ->> ', data);
    this.http.post(`${this.url2}/users`, data)
      .subscribe((result) => {
        console.log('Template Driven Form result ->>', result);
      });
  }

  onReactiveFormSubmit() {
    console.log('ReactiveForm Data ->>', this.ReactiveForm.value);
  }

  get email2() {
    return this.ReactiveForm.get('email');
  }

  get password2() {
    return this.ReactiveForm.get('password');
  }
  // Form methods ends here

  // upload file starts here
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
          this.uploadedImages = [...this.uploadedImages, event.body.link];
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
    this.files = [];
    fileUpload.click();
  }
  // upload file ends here

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
