import { Component, OnInit, DoCheck } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Proprietarios } from 'src/app/core/models/proprietarios';
import { Veiculos } from 'src/app/core/models/veiculos';
import { ProprietarioService } from '../../services/proprietario.service';
import { finalize, tap } from 'rxjs/operators';
import { ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';
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

  public proprietario: Proprietarios = new Proprietarios();
  public veiculo: Veiculos = new Veiculos();
  public veiculoLista: Veiculos[];
  public setorLista: Setor[];
  public postoLista: Posto[];
  public montadoraLista: Montadora[];
  public corLista: Cor[];


  constructor(
    private formBuilder: FormBuilder,
    private proprietarioService: ProprietarioService,
    private veiculoService: VeiculoService,
    private route: ActivatedRoute,
    private next: Router
  ) { }

  ngOnInit(): void {
    
    
      this.veiculoFormArray = new FormArray([]);
      
      this.getProprietarios();
      this.createFormulario();
      
      this.veiculoFormArray = this.formulario.get('veiculos') as FormArray;
      
      if(this.veiculoLista){
      
      this.getVeiculos()

      }else{
      this.veiculoFormArray.push(this.createVeiculos());
      }
    
       
      
       

  }

  public onSubmit(){

    if(this.formulario.valid){
      
      this.proprietario = this.formulario.value
      if(this.route.snapshot.params['id']){
        this.proprietarioService.update(this.proprietario, this.proprietario.id).subscribe();
        this.next.navigate(['proprietarios']);
      }else{
        this.proprietarioService.save(this.proprietario).subscribe(
          success=>this.next.navigate(['proprietarios']),
          error=>alert(error)
        );
        
      }
    }
    
  }
  public addVeiculos(){
    if (this.formulario.valid && this.veiculoFormArray.valid){
      this.veiculoFormArray.push(this.createVeiculos());
    } else {
      alert("Preencha todos os campos!")
    }
  }
  private getProprietarios(){
        
    if(this.route.snapshot.data['proprietarios']){
      
      this.proprietario = this.route.snapshot.data['proprietarios']
      this.veiculoLista = this.proprietario.veiculos;

    }

    this.getSetor();
    this.getPosto();
    this.getMontadora();
    this.getCor();
  }

  private getVeiculos(){
        this.veiculoLista.forEach(data => {
        this.veiculo = data;
        this.veiculoFormArray.push(this.createVeiculos())})
  }
  
  private createFormulario(){
    this.formulario = this.formBuilder.group({
      id: this.proprietario.id,
      nome: [this.proprietario.nome, Validators.required],
      email: [this.proprietario.email, [Validators.required, Validators.email]],
      nip: [this.proprietario.nip, Validators.required],
      cnh: [this.proprietario.cnh, Validators.required],
      setor: [this.proprietario.setor, Validators.required],
      posto: [this.proprietario.posto, Validators.required],
      cartao: [this.proprietario.cartao, Validators.required],
      veiculos: this.formBuilder.array([])
    });
  }

  private createVeiculos(): FormGroup {
    
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
 
}
