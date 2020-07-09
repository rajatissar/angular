import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { LoginComponent } from './login/login.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';

@NgModule({
  declarations: [
    // LoginComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // LoginComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
  ]
})

export class UsersModule { }
