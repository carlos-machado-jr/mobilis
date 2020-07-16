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
  $userService: Observable<any>;
  usuario: Usuarios;
  constructor(
    private userService: UsuariosService,
    ) { }

  ngOnInit(): void {
    
    
  }
  createUser(event){
    this.$userService = this.userService.save(event);
  }

}
