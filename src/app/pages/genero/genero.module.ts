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
import {MessageModule} from "../../arquitetura/message/message.module";
import {ValidationModule} from "../../adminmodule/shared/validation/validation.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {SearchModule} from "../../arquitetura/search-module/search.module";

@NgModule({
  declarations: [
    ListaGeneroComponent,
    IncluirGeneroComponent,
  ],
  imports: [
    CommonModule,
    MessageModule,
    ValidationModule,
    MatTableModule,
    MatButtonModule,
    RouterModule.forChild(generoRoutes),
    MatIconModule,
    HttpClientModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    FlexLayoutModule,
    MatCardModule,
    MatSelectModule,
    MatAutocompleteModule,
    SearchModule,
    SearchModule
  ]
})
export class GeneroModule {
}
