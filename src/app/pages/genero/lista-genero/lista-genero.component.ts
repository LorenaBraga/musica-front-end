import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {GeneroDto} from "../../../api/models/genero-dto";
import {GeneroControllerService} from "../../../api/services/genero-controller.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-lista-genero',
  templateUrl: './lista-genero.component.html',
  styleUrls: ['./lista-genero.component.css']
})
export class ListaGeneroComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome','acoes'];

  generoDataSource: MatTableDataSource<GeneroDto> = new MatTableDataSource<GeneroDto>([]);

  constructor(private generoService: GeneroControllerService,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.buscarDados();
  }

  private buscarDados() {
    this.generoService.listAll1().subscribe(data => {
      this.generoDataSource.data = data;
    })
  }

  remover(generoDto: GeneroDto) {
    this.generoService.excluir1({id: generoDto.id || 0})
      .subscribe(retorno => {
          this.buscarDados();
          this.mostrarMensagem("Excluído com sucesso ",5000);
          console.log("Exclusão:", retorno);
        }, error => {
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
