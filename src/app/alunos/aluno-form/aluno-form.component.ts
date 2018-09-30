import { Subscription } from 'rxjs/Subscription';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  aluno: any;
  inscricao: Subscription;  

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
}
