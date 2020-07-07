import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { PostsService } from '../services/posts.service';

@Injectable({
  providedIn: 'root'
})

export class ResolverService implements Resolve<any> {

  constructor(private postData: PostsService) { }

  resolve(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.postData.getPost(1);
  }
}
