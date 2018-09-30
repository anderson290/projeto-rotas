import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

//variavel para armazenar rotas
const alunosRouts = [
    //definindo rotas filhas de alunos
    //componente pai vazio (lazy loading)
    {path: '', component: AlunosComponent, children:[
        //componentes filhos
        {path: 'novo', component: AlunoFormComponent},
        {path: ':id', component: AlunoDetalheComponent},
        {path: ':id/editar', component: AlunoFormComponent},
    ]}  

];

@NgModule({
    imports: [RouterModule.forChild(alunosRouts)],
    exports:[
        RouterModule
    ]
})
export class AlunosRoutingModule{}