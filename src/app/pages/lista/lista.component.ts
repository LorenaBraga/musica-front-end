import {Component, OnInit, ViewChild} from '@angular/core';
import {MusicaDto} from "../../api/models/musica-dto";
import {MusicaControllerService} from "../../api/services/musica-controller.service";
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{
  //@ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['id','nomeBanda', 'nomeMusica', 'nomeAlbum', 'duracao', 'dataLancamento'];

  musicaDataSource: MatTableDataSource<MusicaDto> = new MatTableDataSource<MusicaDto>([]);


  constructor(
    private musicaControllerService: MusicaControllerService
  ) {
  }
  ngOnInit(): void {
    console.log("Teste", this);
    this.buscarDados();
  }

  private buscarDados() {
    this.musicaControllerService.listAll().subscribe(data => {
      this.musicaDataSource.data = data;
    })
  }
}
