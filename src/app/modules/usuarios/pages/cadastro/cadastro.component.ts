import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Usuarios } from 'src/app/core/models/usuarios';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  usuario: Usuarios;
  formulario: FormGroup;
  constructor(
    private userService: UsuariosService,
    private formBuilder: FormBuilder,
    private route: Router

    ) { }

  ngOnInit(): void {
    
    this.createFormulario();
  }
  
  save(){
    this.userService.save(this.formulario.value).subscribe(
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
