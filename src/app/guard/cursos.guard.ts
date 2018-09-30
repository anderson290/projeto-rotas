import { Injectable } from '@angular/core';
import { CanActivateChild, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";


@Injectable()
export class CursosGuard implements CanActivateChild{
    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot ,
      ): Observable<boolean>|Promise<boolean>|boolean{

        console.log('guarda rota filha');
        return true;
      }
}