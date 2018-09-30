
import { Observable} from 'rxjs/Observable';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';




@Injectable()
export class AlunosGuard implements CanActivateChild{
    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot ,
      ): Observable<boolean>|Promise<boolean>|boolean{

        console.log(route);
        console.log(state);

        //verificação no estado da url atual

        if(state.url.includes('editar')){
            
            return false;
            
        }
        return true;
      }
}