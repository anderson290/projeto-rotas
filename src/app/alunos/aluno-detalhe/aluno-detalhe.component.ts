import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {
  
  aluno: Aluno;
  inscricao: Subscription;  

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router
  ) { }

  
  ngOnInit() {
    /*this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id:number = params['id'];
        this.aluno = this.alunosService.getAluno(id);
      }
    );*/
    //usando o resolver
    this.inscricao = this.route.data.subscribe(
      //obtendo parametro
      (info: {aluno: Aluno})=>{
        this.aluno = info.aluno;
      }
    );
  }
  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }S
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
