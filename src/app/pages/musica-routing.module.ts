import {IncluirComponent} from "./musica/incluir/incluir.component";
import {ListaComponent} from "./musica/lista/lista.component";
import {Routes} from "@angular/router";
import {ListarFavoritasComponent} from "./musica/listar-favoritas/listar-favoritas.component";
import {SecurityGuard} from "../arquitetura/security/security.guard";

export const musicaRoutes: Routes = [
  {
    path: "musica",
    children: [
      {
        path: "listar",
        component: ListaComponent,
        canActivate: [
          SecurityGuard
        ],
      },
      {
        path: "incluir",
        component: IncluirComponent,
        data: {
          acao: 'incluir'
        }
      },
      {
        path: ":id/alterar",
        component: IncluirComponent,
        data: {
          acao: 'alterar'
        }
      },
      {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: "listarFavoritas",
    component: ListarFavoritasComponent,
    canActivate: [
      SecurityGuard
    ],
  },

];
