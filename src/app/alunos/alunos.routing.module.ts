import { AlunoDetalheResolver } from './aluno-detalhe.resolver';
import { resolve } from 'path';
import { AlunosDeactivateGuard } from './../guard/aluno-deactivate.guard';
import { AlunosGuard } from './../guard/alunos.guard';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

//variavel para armazenar rotas
const alunosRouts = [
    //definindo rotas filhas de alunos
    //componente pai vazio (lazy loading)
    {path: '', component: AlunosComponent, 
    CanActivateChild: [AlunosGuard],
    children:[
        //componentes filhos
        {path: 'novo', component: AlunoFormComponent},
        {path: ':id', component: AlunoDetalheComponent,
        //resolvendo caminho
            resolve: {aluno: AlunoDetalheResolver}
        },
        {path: ':id/editar', component: AlunoFormComponent,
            canDeactivate: [AlunosDeactivateGuard]
        },
    ]}  

];

@NgModule({
    imports: [RouterModule.forChild(alunosRouts)],
    exports:[
        RouterModule
    ]
})
export class AlunosRoutingModule{}