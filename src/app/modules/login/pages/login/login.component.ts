import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthserviceService } from 'src/app/shared/utils/services/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  

  formulario: FormGroup;
  
  constructor(
    private authService: AuthserviceService,
    private formBuilder: FormBuilder,
    private route: Router
  ) { }

  
  ngOnInit() {
    this.createForm();
  
  }
  
  authenticated(){
    this.authService.authenticate(this.formulario.value)
    .subscribe(
      sucess => this.route.navigate(['/home']),
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
