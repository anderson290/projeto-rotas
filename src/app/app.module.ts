import { AuthGuard } from './guard/auth-guard';
import { AuthService } from './login/auth.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { Router, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import { AlunosComponent } from './alunos/alunos.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
//import { CursosModule } from './cursos/cursos.module';
//import { AlunosModule } from './alunos/alunos.module';

//import { CursosComponent } from './cursos/cursos.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursosService } from './cursos/cursos.service';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
//    CursosComponent,
    CabecalhoComponent,
 //   CursoDetalheComponent,
  //  CursoNaoEncontradoComponent
  //  AlunosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //importando modulo de cursos
    //CursosModule,
    //AlunosModule,
    AppRoutingModule,
    RouterModule
  ],
 // providers: [CursosService],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
