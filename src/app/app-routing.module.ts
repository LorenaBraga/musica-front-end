import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {musicaRoutes} from "./pages/musica-routing.module";
import {generoRoutes} from "./pages/genero/genero-routing.module";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [... musicaRoutes, ... generoRoutes]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
