import { AlunosService } from './alunos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  //declarando variavel para chamar alunos

  private alunos: any[] = [];
  
  //injetando serviço de alunos
  constructor(private AlunosService: AlunosService) { }

  ngOnInit() {
    this.alunos = this.AlunosService.getAlunos();
  }

}
