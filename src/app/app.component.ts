import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { PostsService } from './posts.service';
import { ModalService } from './modal.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youtube';
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

  constructor(private http: HttpClient, private userData: UserService, private postData: PostsService, private modalData: ModalService) { }

  onInit(): void {
  }

  callGETAPI() {
    this.http.get<[]>(`${this.url}/posts`)
      .subscribe((data) => {
        console.log('AppComponent -> ngOnInit -> data', data);
        this.posts = data;
      });
  }

  click_fun(parm1) {
    alert(parm1);
  }

  mouseenter_fun(parm1) {
    alert(parm1);
  }

  on_key_press(event) {
    console.log(event.target.value);
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
}
