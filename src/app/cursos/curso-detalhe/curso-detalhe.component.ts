import { CursosService } from '../cursos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  curso: any;

  //contrutor para trabalhar com a rota ativa
  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService,
    private router: Router
    ) { 
    //this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    //obter o ID dinamicamente escutando o id
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.curso = this.cursosService.getCurso(this.id);
        
        //redirecionando se o id nao estiver cadastrado
        if(this.curso == null){
            this.router.navigate(['cursos/naoEncontrado']);
        }
      }
    );
  }
  ngOnDestroy(){
    //remover inscrição quando o componente for destruido
    this.inscricao.unsubscribe();
  }

}
