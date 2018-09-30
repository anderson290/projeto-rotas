import { AlunoDetalheResolver } from './aluno-detalhe.resolver';
import { AlunosDeactivateGuard } from './../guard/aluno-deactivate.guard';
import { AlunosRoutingModule } from './alunos.routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosService } from './alunos.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        //importando diretivas > ngIf ngFor
        CommonModule,
        AlunosRoutingModule,
        FormsModule
    ],
    exports: [],
    declarations: [
        //todos tem acesso ao alunosService
        AlunosComponent, AlunoFormComponent, AlunoDetalheComponent
        ],
    providers: [AlunosService, AlunosDeactivateGuard, AlunoDetalheResolver],
})

export class AlunosModule{}