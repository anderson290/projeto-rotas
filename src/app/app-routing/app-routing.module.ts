import { AuthGuard } from './../guard/auth-guard';
//import { CursoNaoEncontradoComponent } from './../cursos/curso-nao-encontrado/curso-nao-encontrado.component';
//import { CursoDetalheComponent } from './../cursos/curso-detalhe/curso-detalhe.component';
import { HomeComponent } from './../home/home.component';
import { LoginComponent } from './../login/login.component';
//import { CursosComponent } from './../cursos/cursos.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  
  //priorizando carregamentos (caminho modulo#nomemodulo)
  //lazy loading | colocar o caminho#modulo - remova qualquer 
  //import do modulo na aplicação - no arquivo de roteamento do modulo
  //o caminho principal deve ficar vazio
  {path: 'cursos', 
    loadChildren: 'app/cursos/cursos.module#CursosModule',
    //aplicando o guarda de rotas
    canActivate: [AuthGuard]

  },
  {path: 'alunos', 
    loadChildren: 'app/alunos/alunos.module#AlunosModule',
    
    //aplicando o guarda de rotas
    canActivate: [AuthGuard]
  },
  //{path: 'cursos', component: CursosComponent},
  //{path: 'curso/:id', component: CursoDetalheComponent},
  {path: 'login', component: LoginComponent},
  //{path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
  
  {path: '', component: HomeComponent,
    //aplicando o guarda de rotas
    canActivate: [AuthGuard]  
  }

];

@NgModule({
  imports: [
     RouterModule.forRoot(appRoutes)   
    ],
    exports:[
      //exportando para que as diretivas fiquem disponiveis no projeto
      RouterModule
    ],
  declarations: []
})
export class AppRoutingModule { }
