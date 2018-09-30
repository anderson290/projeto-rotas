import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  //criando array de objetos alunos
  private alunos:any[] = [
    {id: 1, nome:'Anderson', email:'anderson@email.com'},
    {id: 2, nome:'Aluno2', email:'aluno2@email.com'},
    {id: 3, nome:'Aluno3', email:'aluno3@email.com'},
  ]
  constructor() { }
  
  getAlunos(){
    return this.alunos;
  }
  getAluno(id:number){
   for (let i=0;i<this.alunos.length;i++){
    let aluno = this.alunos[i];
    if(aluno.id == id){
      return aluno;
    }
   }
   return null;
  }
}
