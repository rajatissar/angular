import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// services
import { UploadService } from './services/upload.service';
import { AuthService } from './guard/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('fileUpload', { static: false }) fileUpload: ElementRef;

  files = [];
  uploadedImages = [];
  model = {
    left: true,
    middle: false,
    right: false
  };
  user1 = {
    email: 'rajat.kumar@daffodilsw.com',
    password: 123456
  };
  ReactiveForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(8)])
  });
  url2 = 'http://localhost:3000';
  numbers: number[] = [];
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

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }
}
