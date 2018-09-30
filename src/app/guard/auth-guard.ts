import { AuthService } from './../login/auth.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';

//serviço guarda de rota CanActivate
import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AuthGuard implements CanActivate{
//injetar o serviço de auth que é global | para poder fazer a verificação

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }
//metodo para saber se pode ou nao retornar a rota
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ) : Observable<boolean> | boolean{

    if(this.authService.usuarioEstaAutenticado()){
      //retorno dizendo que ele ta autenticado
      return true;
    }else{
      //forçando o usuario a ir para tela de login
      this.router.navigate(['/login']);
    }
      
  }
}
