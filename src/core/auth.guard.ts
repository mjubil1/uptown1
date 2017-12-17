import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
 

interface CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean>|Promise<boolean>|boolean
}

@Injectable()
export class AuthGuard implements CanActivate {
 constructor(private auth: AuthService, private router: Router) {

 }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.user
            .take(1)
            .map(user => !!user)
            .do(loggedIn => {
              if(!loggedIn) {
                console.log('access denied');
                this.router.navigate(['/login/login']);
              }
            })
  }
}
