import {Routes} from "@angular/router";
import {ListaGeneroComponent} from "./lista-genero/lista-genero.component";
import {IncluirGeneroComponent} from "./incluir-genero/incluir-genero.component";

export const generoRoutes: Routes = [
  {
    path: "genero",
    children: [
      {
        path: "",
        component: ListaGeneroComponent,
      },
      {
        path: "cadastrar",
        component: IncluirGeneroComponent,
      },
      {
        path: ":idGenero",
        component: IncluirGeneroComponent,
      }
    ]
  }
];
