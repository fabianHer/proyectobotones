import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../servicios/login.service'; 


@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  constructor( private loginService: LoginService, private route: Router ){}
  canActivate(): boolean {
    if(this.loginService.estaAutenticado()){
      return true;
    } else {
      this.route.navigateByUrl('/login');
      return false;
    }
  }
  
}
