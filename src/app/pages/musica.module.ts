import {ListaComponent} from "./lista/lista.component";
import {IncluirComponent} from "./incluir/incluir.component";
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
import {musicaRoutes} from "./musica-routing.module";
import {NgModule} from "@angular/core";
import {MatDatepickerModule} from "@angular/material/datepicker";

@NgModule({
  declarations: [
    ListaComponent,
    IncluirComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(musicaRoutes),
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
export class MusicaModule { }
