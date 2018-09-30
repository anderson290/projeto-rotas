import { CursosModule } from './cursos/cursos.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { Router, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import { CursosComponent } from './cursos/cursos.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos/cursos.service';
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //importando modulo de cursos
    CursosModule,
    AppRoutingModule,
    RouterModule
  ],
 // providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
