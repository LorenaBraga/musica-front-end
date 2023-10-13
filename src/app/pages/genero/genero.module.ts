import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {IncluirGeneroComponent} from './incluir-genero/incluir-genero.component';
import {ListaGeneroComponent} from './lista-genero/lista-genero.component';
import {generoRoutes} from "./genero-routing.module"

@NgModule({
  declarations: [
    ListaGeneroComponent,
    IncluirGeneroComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(generoRoutes),
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule
  ]
})
export class GeneroModule {
}
