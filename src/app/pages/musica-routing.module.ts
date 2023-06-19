import {IncluirComponent} from "./incluir/incluir.component";
import {ListaComponent} from "./lista/lista.component";
import {Routes} from "@angular/router";

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
      }
    ]
  }
];
