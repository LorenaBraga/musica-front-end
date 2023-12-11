import {ListaComponent} from "./musica/lista/lista.component";
import {IncluirComponent} from "./musica/incluir/incluir.component";
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
import {MatSelectModule} from "@angular/material/select";
import { ListarFavoritasComponent } from './musica/listar-favoritas/listar-favoritas.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCardModule} from "@angular/material/card";
import {MessageModule} from "../arquitetura/message/message.module";
import {ValidationModule} from "../adminmodule/shared/validation/validation.module";
import {SearchModule} from "../arquitetura/search-module/search.module";

@NgModule({
  declarations: [
    ListaComponent,
    IncluirComponent,
    ListarFavoritasComponent
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
    MatDatepickerModule,
    MatSelectModule,
    MatExpansionModule,
    MatCardModule,
    MessageModule,
    ValidationModule,
    SearchModule,
  ]
})
export class MusicaModule { }
