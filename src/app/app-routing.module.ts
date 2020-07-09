import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ServicesComponent } from './components/services/services.component';
import { ViewChildComponent } from './components/view-child/view-child.component';

import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ChildComponent } from '../app/components/child/child.component';
import { NestedRoutesComponent } from './components/nested-routes/nested-routes.component';
import { NestedRouteComponent } from './components/nested-routes/nested-route/nested-route.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// guard
import { AuthGuard } from './guard/auth.guard';
// resolver
import { ResolverService } from './guard/resolver.service';

const routes: Routes = [
  {
    path: 'data-binding',
    component: DataBindingComponent
  },
  {
    path: 'directive',
    component: DirectiveComponent
  },
  {
    path: 'pipe',
    component: PipesComponent
  },
  {
    path: 'service',
    component: ServicesComponent
  },
  {
    path: 'view-child',
    component: ViewChildComponent
  },
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
        resolve: {
          data1: ResolverService
        }
      }
    ]
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
    data: {
      message: 'static data from route'
    }
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'data-binding'
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
