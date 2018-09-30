import { IFormCanDeactivate } from './i-form-can-deactivate';
import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()
// especificar qual componente queremos desativar| dentro do modulo aluno providers[]
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {
    canDeactivate(
        component: IFormCanDeactivate,
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        console.log('guarda de desativação');
        return component.podeDesativar ? component.podeDesativar() : true;
        
    }
}