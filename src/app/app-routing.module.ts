import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ChildComponent } from './child/child.component';
import { NestedRoutesComponent } from './components/nested-routes/nested-routes.component';
import { NestedRouteComponent } from './components/nested-routes/nested-route/nested-route.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// guard
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'details/:id/:name',
    component: UserDetailsComponent
  },
  {
    path: 'child',
    component: ChildComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'nested-route',
    component: NestedRoutesComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: ':id',
        component: NestedRouteComponent,
        canDeactivate: [AuthGuard],
      }
    ]
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users'
  },
  {
    path: '**',
    redirectTo: 'page-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
