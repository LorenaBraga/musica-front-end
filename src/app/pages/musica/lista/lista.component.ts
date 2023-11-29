import {Component, OnInit, ViewChild} from '@angular/core';
import {MusicaDto} from "../../../api/models/musica-dto";
import {MusicaControllerService} from "../../../api/services/musica-controller.service";
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{
  //@ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['id','nomeBanda', 'nomeMusica', 'nomeAlbum', 'duracao', 'dataLancamento', 'genero', 'acoes'];

  musicaDataSource: MatTableDataSource<MusicaDto> = new MatTableDataSource<MusicaDto>([]);


  constructor(
    private musicaControllerService: MusicaControllerService,
    public snackBar: MatSnackBar
  ) {
  }
  ngOnInit(): void {
    console.log("Teste", this);
    this.buscarDados();
  }

  private buscarDados() {
    this.musicaControllerService.musicaControllerListAll$Response().subscribe((data) => {
      data.body.sort((a: any, b: any) => a.id - b.id);
      this.musicaDataSource.data = data.body;
    })
  }

  remover(musicaDto: MusicaDto){
    console.log("Removido", musicaDto.id);
    this.musicaControllerService.musicaControllerRemover({id: musicaDto.id || 0})
      .subscribe((retorno) => {
          this.buscarDados();
          this.mostrarMensagem("Excluído com sucesso ",5000);
          console.log("Exclusão:", retorno);
        }, (error) => {
          if (error.status === 404) {
            this.mostrarMensagem("Música não existe mais")
          } else {
            this.mostrarMensagem("Erro ao excluir");
            console.log("Erro:", error);
          }
        }
      )
  }

  favoritar(musicaDTO: MusicaDto){
    this.musicaControllerService.musicaControllerFavoritarMusica({id : musicaDTO.id || 0})
      .subscribe((retorno) => {
        this.buscarDados();
        if (retorno.favorito) {
          this.mostrarMensagem("Música favoritada", 5000);
        } else {
          this.mostrarMensagem("Música desfavoritada", 5000);
        }

      }, (error) => {
        if (error.status === 404) {
          this.mostrarMensagem("Música não existe mais")
        } else {
          this.mostrarMensagem("Erro ao favoritar");
          console.log("Erro:", error);
        }
      })
  }

  mostrarMensagem( mensagem: string, duracao: number = 2000) {
    this.snackBar.open(mensagem, 'Fechar', {
      duration: duracao,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}

