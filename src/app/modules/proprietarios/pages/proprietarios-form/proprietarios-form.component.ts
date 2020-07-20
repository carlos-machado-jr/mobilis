import { Component, OnInit, DoCheck } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Proprietarios } from 'src/app/core/models/proprietarios';
import { Veiculos } from 'src/app/core/models/veiculos';
import { ProprietarioService } from '../../services/proprietario.service';
import { finalize, tap } from 'rxjs/operators';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Setor } from 'src/app/core/models/setor';
import { Posto } from 'src/app/core/models/posto';
import { VeiculoService } from 'src/app/modules/veiculos/services/veiculo.service';
import { Montadora } from 'src/app/core/models/montadora';
import { Cor } from 'src/app/core/models/cor';

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
  public setorLista: Setor[];
  public postoLista: Posto[];
  public montadoraLista: Montadora[];
  public corLista: Cor[];


  constructor(
    private formBuilder: FormBuilder,
    private proprietarioService: ProprietarioService,
    private veiculoService: VeiculoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.getProprietarios();
      this.veiculoFormArray = new FormArray([]);
      this.getMontadora();
      this.getCor();
      this.veiculoFormArray.push(this.createVeiculos());
      this.createFormulario();

       
      
       

  }
 
  getProprietarios(){
    this.proprietario = this.proprietarioVazio();
    if(this.route.snapshot.data['proprietarios']){
      this.proprietario = this.route.snapshot.data['proprietarios']
    }
    
    this.getSetor();
    this.getPosto();
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
      veiculos: this.veiculoFormArray
    });
  }

  createVeiculos(){
    this.veiculoVazio();
    return this.formBuilder.group({
      id: this.veiculo.id,
      modelo: [this.veiculo.modelo, Validators.required],
      ano: [this.veiculo.ano, Validators.required],
      placa: [this.veiculo.placa, Validators.required],
      chassi: [this.veiculo.chassi, Validators.required],
      montadora: [this.veiculo.montadora, Validators.required],
      cor: [this.veiculo.cor, Validators.required]
    });
  }

  private getPosto(){
    return this.proprietarioService.findAllPosto()
      .pipe(
        tap((data: Posto[] )=> {
          this.postoLista = data
        }))
      .subscribe();  
  }

  private getSetor(){
    return this.proprietarioService.findAllSetor()
      .pipe(
        tap((data: Setor[] )=> {
          this.setorLista = data
        }))
      .subscribe();  
  }

  private getCor(){
    return this.veiculoService.findAllCor()
      .pipe(
        tap((data: Cor[] )=> {
          this.corLista = data
        }))
      .subscribe();  
  }

  private getMontadora(){
    return this.veiculoService.findAllMontadora()
      .pipe(
        tap((data: Montadora[] )=> {
          this.montadoraLista = data
        }))
      .subscribe();  
  }
  private proprietarioVazio(): Proprietarios{
    return { id: '', nome: '', email: '', nip: '', cnh:'', setor:'', posto:'', cartao: '', veiculos:[]};
  }

  private veiculoVazio(): Veiculos{
    return { id: '', modelo: '', ano: '', placa: '', chassi:'', montadora:'', cor:''  };
  }
}
