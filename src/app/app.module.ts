import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollingModule } from '@angular/cdk/scrolling';

// components
import { AppComponent } from './app.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { ChildComponent } from './components/child/child.component';
import { Child2Component } from './components/child2/child2.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { InputComponent } from './shared/input/input.component';
import { ButtonComponent } from './shared/button/button.component';
import { NestedRoutesComponent } from './components/nested-routes/nested-routes.component';
import { NestedRouteComponent } from './components/nested-routes/nested-route/nested-route.component';
// directives
import { CustomStyleDirective } from './directives/custom-style.directive';
import { Renderer2StyleDirective } from './directives/renderer2-style.directive';
// modules
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material/material.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    ChildComponent,
    Child2Component,
    UsersComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    UserDetailsComponent,
    InputComponent,
    ButtonComponent,
    NestedRoutesComponent,
    NestedRouteComponent,
    CustomStyleDirective,
    Renderer2StyleDirective,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    UsersModule,
    MaterialModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
