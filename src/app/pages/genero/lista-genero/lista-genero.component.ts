import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {GeneroDto} from "../../../api/models/genero-dto";
import {GeneroControllerService} from "../../../api/services/genero-controller.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {BaseComponent} from "../../../core/BaseComponent";
import {ActivatedRoute, Router} from "@angular/router";
import {SecurityService} from "../../../arquitetura/security/security.service";

@Component({
  selector: 'app-lista-genero',
  templateUrl: './lista-genero.component.html',
  styleUrls: ['./lista-genero.component.css']
})
export class ListaGeneroComponent extends BaseComponent<GeneroDto> implements OnInit {

  displayedColumns: string[] = ['id', 'nome','acoes'];

  generoDataSource: MatTableDataSource<GeneroDto> = new MatTableDataSource<GeneroDto>([]);

  constructor(public generoService: GeneroControllerService,
              public snackBar: MatSnackBar,
              public securityService: SecurityService,
              protected override route: ActivatedRoute,
              protected override router: Router,) {
    super(route, router);
    console.log(securityService)
  }

  ngOnInit() {
    this.buscarDados();
  }

  showResult($event: any[]) {
    this.confDataResult($event);
  }

  private confDataResult(data: any[] | undefined) {
    this.generoDataSource = new MatTableDataSource<GeneroDto>(data || []);
  }

  private buscarDados() {
    this.generoService.generoControllerListAll$Response().subscribe(data => {
      this.generoDataSource.data = data.body;
    })
  }

  remover(generoDto: GeneroDto) {
    this.generoService.generoControllerRemover({id: generoDto.id || 0})
      .subscribe((retorno) => {
          this.buscarDados();
          this.mostrarMensagem("Excluído com sucesso ",5000);
          console.log("Exclusão:", retorno);
        }, (error) => {
          if (error.status === 404) {
            this.mostrarMensagem("Genero não existe mais")
          } else {
            this.mostrarMensagem("Erro ao excluir");
            console.log("Erro:", error);
          }
        }
      )
  }

  mostrarMensagem( mensagem: string, duracao: number = 2000) {
    this.snackBar.open(mensagem, 'Fechar', {
      duration: duracao,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
