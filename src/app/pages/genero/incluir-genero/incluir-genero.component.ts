import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GeneroControllerService} from "../../../api/services/genero-controller.service";
import {DateAdapter} from "@angular/material/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {BaseComponent} from "../../../core/BaseComponent";
import {GeneroDto} from "../../../api/models/genero-dto";

@Component({
  selector: 'app-incluir-genero',
  templateUrl: './incluir-genero.component.html',
  styleUrls: ['./incluir-genero.component.css']
})
export class IncluirGeneroComponent extends BaseComponent<GeneroDto>{
  id!: number;

  constructor(private generoService: GeneroControllerService,
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar,
              protected override router: Router,
              protected override route: ActivatedRoute) {
    super(route, router)

    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId) {
      const codigo = parseInt(paramId);
      this.generoService.generoControllerObterPorId({id: codigo}).subscribe(
        (retorno) => {
          this.id = retorno.id;
          this.formGroup.patchValue(retorno);
        }
      )
    }
    this.createForm();
  }

  private createForm() {
    this.formGroup = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.maxLength(50)]],
      musicas: [[]]
    })
  }

  onSubmit() {
    if (this.formGroup.valid) {
      if (!this.id) {
        this.generoService.generoControllerIncluir({body: this.formGroup.value})
          .subscribe((retorno) => {
            console.log("Retorno:", retorno);
            this.showMensagemSimples("Genero incluido com sucesso!")
            this.router.navigate(['/genero']);
          }, (erro) => {
            console.log("Erro:" + erro);
            alert("Erro ao incluir!");
          })
      } else {
        this.generoService.generoControllerAlterar({id: this.id, body: this.formGroup.value})
          .subscribe((retorno) => {
            this.showMensagemSimples("Genero alterado com sucesso!");
            this.router.navigate(['/genero']);
          }, (erro) => {
            console.log("Erro:" + erro);
            alert("Erro ao alterar!");
          })
      }
    }
  }

  showMensagemSimples(mensagem: string, duracao: number = 2000) {
    this.snackBar.open(mensagem, 'Fechar', {
      duration: duracao,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
