import { IFormCanDeactivate } from './../../guard/i-form-can-deactivate';
import { Subscription } from 'rxjs/Subscription';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { componentModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IFormCanDeactivate {

  aluno: any;
  inscricao: Subscription;  
  private formMudou: boolean = false;
  
  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id:number = params['id'];

        this.aluno = this.alunosService.getAluno(id);

        //verificar campo
        if(this.aluno === null){

          this.aluno = {}

        }
      }
    );
      
  }
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
  onInput(){
    this.formMudou = true;
    console.log('mudou');
  }
  podeMudarRota(){

    if(this.formMudou){

      confirm('Tem Certeza que deseja sair?');
      
    }
    return true;
  }
  podeDesativar(){
    return this.podeMudarRota();
  }
}
