//organizando as rotas de cursos
import { NgModule } from '@angular/core';

import { CursosComponent } from './cursos.component';
import { CursoNaoEncontradoComponent } from './../cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './../cursos/curso-detalhe/curso-detalhe.component';
import { Routes, RouterModule } from '@angular/router';


const cursosRoutes: Routes = [
  //esta vazio por conta do lazy loading
  //caminho hardcoded sempre na frente do id (dinamico)
  {path: '', component: CursosComponent},
  {path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
  {path: ':id', component: CursoDetalheComponent}


];

@NgModule({
  imports: [
      //sendo um modulo de funcionalidade utilizamos o forChild
     RouterModule.forChild(cursosRoutes)   
    ],
    exports:[
      //exportando para que as diretivas fiquem disponiveis no projeto
      RouterModule
    ],
  declarations: []
})
export class CursosRoutingModule { }
