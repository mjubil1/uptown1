import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {

 constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
  {
    if(!this.auth.isAuthenticated())
    {
      console.log("ACCESS GRANTED");
      this.router.navigate(['login']);
      return true;
    }
    else
    {
      console.log("ACCESS DENIED!");
      this.router.navigate(['/login']);
      return false;
    }
  }
}
