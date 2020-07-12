import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthserviceService } from 'src/app/shared/utils/services/authservice.service';
import { Usuarios } from 'src/app/core/models/usuarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  usuario: Usuarios;

  formulario: FormGroup;
  
  constructor(
    private authService: AuthserviceService,
    private formBuilder: FormBuilder,
    private route: Router
  ) { }

  
  ngOnInit() {
    this.createForm();
    console.log(this.formulario);
  }
  
  authenticated(){
    this.usuario = this.formulario.value;
    this.authService.authenticate(this.usuario).subscribe(
      sucess => {

        this.authService.succesfulLogin(sucess.headers.get('Authorization'));
        this.route.navigate(['/home'])
        
      },
      erro => ''
      
    );
  }

  createForm(){
    this.formulario = this.formBuilder.group({
      nome_usuario:['', Validators.required],
      senha: ['', Validators.required]
    });
  }

}
