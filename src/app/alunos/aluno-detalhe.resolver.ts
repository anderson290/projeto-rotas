import { AlunosService } from './alunos.service';
import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Aluno } from "./aluno";

@Injectable()
    
    //objeto que sera resolvido
    export class AlunoDetalheResolver implements Resolve<Aluno>{
            
        constructor(private alunosService: AlunosService){}

        resolve(
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<any> | Promise<any>| any{
           
                let id:number = route.params['id'];
                return this.alunosService.getAluno(id);
          
        }
    }

  