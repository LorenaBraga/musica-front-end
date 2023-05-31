import { Component } from '@angular/core';
import {MusicaControllerService} from "../../api/services/musica-controller.service";
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {DateAdapter} from "@angular/material/core";
import {MusicaDto} from "../../api/models/musica-dto";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.css']
})

export class IncluirComponent {

  formGroup!: FormGroup;

  constructor(private musicaService: MusicaControllerService,
              private formBuilder: FormBuilder,
              private _adapter: DateAdapter<any>,
              private snackBar: MatSnackBar) {

    this.createForm();
    this._adapter.setLocale('pt-br');
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      nomeBanda: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      nomeAlbum: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      nomeMusica: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      duracao: [null, [Validators.required]],
      dataLancamento: [null, [Validators.required]]
    })
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.formGroup.controls[controlName].hasError(errorName);
  };

  onSubmit() {
    if (this.formGroup.valid) {
      this.musicaService.incluir({body: this.formGroup.value})
        .subscribe( retorno =>{
          console.log("Retorno:",retorno);
          this.showMensagemSimples("Musica incluida com sucesso!")
        }, erro =>{
          console.log("Erro:"+erro);
          alert("Erro ao incluir!");
        })
    }
  }

  showMensagemSimples( mensagem: string, duracao: number = 2000) {
    this.snackBar.open(mensagem, 'Fechar', {
      duration: duracao,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }


}
