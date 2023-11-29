import {Component, OnInit} from '@angular/core';
import {MusicaControllerService} from "../../../api/services/musica-controller.service";

@Component({
  selector: 'app-listar-favoritas',
  templateUrl: './listar-favoritas.component.html',
  styleUrls: ['./listar-favoritas.component.css']
})
export class ListarFavoritasComponent implements OnInit{

  listaFavoritas: any[] = []
     constructor(private musicaService: MusicaControllerService) {
       musicaService.musicaControllerListarfavoritas().toPromise().then((value: any) => {
        console.log(value);
        this.listaFavoritas = value;
      })
    }

    ngOnInit() {
    }

}
