import { AlunosRoutingModule } from './alunos.routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

@NgModule({
    imports: [
        //importando diretivas > ngIf ngFor
        CommonModule,
        AlunosRoutingModule
    ],
    exports: [],
    declarations: [
        AlunosComponent, AlunoFormComponent, AlunoDetalheComponent
        ],
    providers: [],
})

export class AlunosModule{}