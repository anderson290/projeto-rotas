import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/forms/src/facade/async';
//serviço para autenticar login
@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean =false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  //injetando para definir redirecionamento ao logar
  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    //verificando o login
    if(usuario.nome == 'usuario@email.com' && usuario.senha=='1234'){
      this.usuarioAutenticado = true;

      //emitindo autenticação
      this.mostrarMenuEmitter.emit(true); 

      //navegando para a home
      this.router.navigate(['/']);
    }else{
        
      //emitindo autenticação
      
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false); 

    }
  }
  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
