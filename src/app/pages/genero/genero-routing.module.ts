import {Routes} from "@angular/router";
import {ListaGeneroComponent} from "./lista-genero/lista-genero.component";
import {IncluirGeneroComponent} from "./incluir-genero/incluir-genero.component";
import {SecurityGuard} from "../../arquitetura/security/security.guard";

export const generoRoutes: Routes = [
  {
    path: "genero",
    children: [
      {
        path: "listar",
        component: ListaGeneroComponent,
        canActivate: [
          SecurityGuard
        ],
      },
      {
        path: "incluir",
        component: IncluirGeneroComponent,
        data: {
          acao: 'incluir'
        }
      },
      {
        path: ':id/alterar',
        component: IncluirGeneroComponent,
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
  }
];
