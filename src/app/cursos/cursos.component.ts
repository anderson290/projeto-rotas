import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];
  pagina: number;
  inscricao: Subscription;

  constructor(
    private cursosService: CursosService,

    //pega a rota atual
    private route: ActivatedRoute,

    private router: Router
    ) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();

    //pegando o parametros de query
    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) =>{
        this.pagina = queryParams['pagina'];
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
  proximaPagina(){
    this.pagina++;
    //botao mudando de pagina
    this.router.navigate(['/cursos'],
    {queryParams: {pagina: this.pagina}});
  }
  

}
