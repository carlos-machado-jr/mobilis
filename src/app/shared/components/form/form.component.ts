import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuarios } from 'src/app/core/models/usuarios';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formulario: FormGroup;
  @Input() $userService: Observable<any>;
  @Output() usuario = new EventEmitter()
  constructor(
    private formBuilder: FormBuilder,
    private route: Router
    ) { }

  ngOnInit(): void {
    this.createFormulario()
    
    
  }
  ngDoCheck(){
    this.usuario.next(this.formulario.value);
  }
  save(){
    
    this.$userService.subscribe(
      success=> console.log(this.route.navigate(['usuarios'])),
      err => console.log(err)
      

      
    );
  }
  createFormulario(){
    this.formulario = this.formBuilder.group({
      nome_usuario:[''],
      email:[''],
      senha:[''],
      nip_responsavel:[''],
      permissao:['']
    });
  }
}
