import { Component, OnInit, DoCheck } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Proprietarios } from 'src/app/core/models/proprietarios';
import { Veiculos } from 'src/app/core/models/veiculos';
import { ProprietarioService } from '../../services/proprietario.service';
import { finalize, tap } from 'rxjs/operators';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proprietarios-form',
  templateUrl: './proprietarios-form.component.html',
  styleUrls: ['./proprietarios-form.component.css']
})
export class ProprietariosFormComponent implements OnInit {
  public formulario: FormGroup;
  public veiculoFormArray: FormArray;

  public proprietario: Proprietarios;
  public veiculo: Veiculos;
  public veiculoLista: Veiculos[];

  constructor(
    private formBuilder: FormBuilder,
    private proprietarioService: ProprietarioService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.getProprietarios();
      this.createFormulario();
  }
 
  getProprietarios(){
    this.proprietario = this.proprietarioVazio();
    
  }
  
  createFormulario(){
    this.formulario = this.formBuilder.group({
      id: this.proprietario.id,
      nome: [this.proprietario.nome, Validators.required],
      email: [this.proprietario.email, [Validators.required, Validators.email]],
      nip: [this.proprietario.nip, Validators.required],
      cnh: [this.proprietario.cnh, Validators.required],
      setor: [this.proprietario.setor, Validators.required],
      posto: [this.proprietario.posto, Validators.required],
      cartao: [this.proprietario.cartao, Validators.required],

    });


    
  }

  private proprietarioVazio(): Proprietarios{
    return { id: '', nome: '', email: '', nip: '', cnh:'', setor:'', posto:'', cartao: '', veiculos:[]};
  }
}
