import {Component} from '@angular/core';
import {MusicaControllerService} from "../../../api/services/musica-controller.service";
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {DateAdapter} from "@angular/material/core";
import {MusicaDto} from "../../../api/models/musica-dto";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {GeneroControllerService} from "../../../api/services/genero-controller.service";
import {GeneroDto} from "../../../api/models/genero-dto";

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.css']
})

export class IncluirComponent {

  formGroup!: FormGroup;
  id!: number;

  listaGeneros: GeneroDto[] = [];

  constructor(private musicaService: MusicaControllerService,
                    private formBuilder: FormBuilder,
                    private _adapter: DateAdapter<any>,
                    private snackBar: MatSnackBar,
                    public router: Router,
                    public route: ActivatedRoute,
                    private generoService: GeneroControllerService
  ) {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId) {
      const codigo = parseInt(paramId);
      this.musicaService.musicaControllerObterPorId({id: codigo}).subscribe(
        (retorno) => {
          console.log("retorno", retorno);
          this.id = retorno.id;
          this.formGroup.patchValue(retorno);
        }
      )
    }
    this.buscarGeneros();
    this.createForm();
    this._adapter.setLocale('pt-br');
  }

  buscarGeneros() {
     this.generoService.generoControllerListAll().subscribe((retorno: any) => {
      console.log(retorno);
      this.listaGeneros = retorno;
    });
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      nomeBanda: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      nomeAlbum: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      nomeMusica: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      duracao: [null, [Validators.required]],
      dataLancamento: [null, [Validators.required]],
      id_genero: [null, [Validators.required]]
    })
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.formGroup.controls[controlName].hasError(errorName);
  };

  onSubmit() {
    if (this.formGroup.valid) {
      if (!this.id) {
        this.musicaService.musicaControllerIncluir({body: this.formGroup.value})
          .subscribe((retorno) => {
            console.log("Retorno:", retorno);
            this.showMensagemSimples("Musica incluida com sucesso!")
            this.router.navigate(['/musica']);
          }, (erro) => {
            console.log("Erro:" + erro);
            alert("Erro ao incluir!");
          })
      } else {
        this.musicaService.musicaControllerAlterar({id: this.id, body: this.formGroup.value})
          .subscribe((retorno) => {
            this.showMensagemSimples("Musica alterada com sucesso!");
            this.router.navigate(['/musica']);
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


  selectGeneroChange(event: Event) {
    console.log('envent', event)
  }
}
