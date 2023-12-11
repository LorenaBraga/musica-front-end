import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {musicaRoutes} from "./pages/musica-routing.module";
import {generoRoutes} from "./pages/genero/genero-routing.module";
import {AdministracaoRoutes} from "./adminmodule/administracao.routing";
import {AutenticacaoRoutes} from "./arquitetura/autenticacao/autenticacao.routing";
import {HomeComponent} from "./core/home/home.component";
import {H} from "@angular/cdk/keycodes";
import {SecurityGuard} from "./arquitetura/security/security.guard";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [
      SecurityGuard
    ],
    children: [... musicaRoutes, ... generoRoutes, ...AdministracaoRoutes]
},
  {
    path: "acesso",
    children: [
      ...AutenticacaoRoutes
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
