import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// services
import { UploadService } from './services/upload.service';
import { AuthService } from './guard/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user1 = {
    email: 'rajat.kumar@daffodilsw.com',
    password: 123456
  };
  ReactiveForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(8)])
  });
  url2 = 'http://localhost:3000';
  isLoggedIn = false;


  constructor(
    private http: HttpClient,
    private uploadService: UploadService,
    private authService: AuthService,
  ) { }

  onInit(): void {
  }

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

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }
}
