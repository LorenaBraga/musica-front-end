import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GeneroControllerService} from "../../../api/services/genero-controller.service";
import {DateAdapter} from "@angular/material/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-incluir-genero',
  templateUrl: './incluir-genero.component.html',
  styleUrls: ['./incluir-genero.component.css']
})
export class IncluirGeneroComponent {
  formGroup!: FormGroup
  id!: number;

  constructor(private generoService: GeneroControllerService,
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar,
              private router: Router,
              private route: ActivatedRoute) {

    const paramId = this.route.snapshot.paramMap.get('idGenero');
    if (paramId) {
      const codigo = parseInt(paramId);
      this.generoService.buscarPorId1({id: codigo}).subscribe(
        retorno => {
          this.id = retorno.id;
          this.formGroup.patchValue(retorno);
        }
      )
    }
    this.createForm();
  }

  private createForm() {
    this.formGroup = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.maxLength(50)]]
    })
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.formGroup.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    if (this.formGroup.valid) {
      if (!this.id) {
        this.generoService.incluir2({body: this.formGroup.value})
          .subscribe(retorno => {
            console.log("Retorno:", retorno);
            this.showMensagemSimples("Genero incluido com sucesso!")
            this.router.navigate(['/genero']);
          }, erro => {
            console.log("Erro:" + erro);
            alert("Erro ao incluir!");
          })
      } else {
        this.generoService.alterar1({id: this.id, body: this.formGroup.value})
          .subscribe(retorno => {
            this.showMensagemSimples("Genero alterado com sucesso!");
            this.router.navigate(['/genero']);
          }, erro => {
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
