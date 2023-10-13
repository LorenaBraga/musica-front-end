import {IncluirComponent} from "./musica/incluir/incluir.component";
import {ListaComponent} from "./musica/lista/lista.component";
import {Routes} from "@angular/router";
import {ListarFavoritasComponent} from "./musica/listar-favoritas/listar-favoritas.component";

export const musicaRoutes: Routes = [
  {
    path: "musica",
    children: [
      {
        path: "",
        component: ListaComponent
      },
      {
        path: "cadastrar",
        component: IncluirComponent
      },
      {
        path: ":idMusica",
        component: IncluirComponent
      },
    ]
  },
  {
    path: "listarFavoritas",
    component: ListarFavoritasComponent
  },
];
