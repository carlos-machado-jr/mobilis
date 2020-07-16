import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Usuarios } from 'src/app/core/models/usuarios';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  formulario: FormGroup;
  usuario: Usuarios;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UsuariosService,
    private route: Router
    ) { }

  ngOnInit(): void {
    this.createFormulario()
    
    
  }
  save(){
    this.usuario = this.formulario.value;
    this.userService.save(this.usuario).subscribe(
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
