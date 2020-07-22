import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proprietarios } from 'src/app/core/models/proprietarios';
import { Veiculos } from 'src/app/core/models/veiculos';

@Component({
  selector: 'app-proprietarios',
  templateUrl: './proprietarios.component.html',
  styleUrls: ['./proprietarios.component.css']
})
export class ProprietariosComponent implements OnInit {
  
  data: any[];
  columns: String[] = ['id', 'nome', 'email', 'nip', 'cnh', 'setor', 'posto', 'cartao']
  constructor(
    private route: ActivatedRoute,
    private next: Router
    ) { }

  ngOnInit(): void {
   this.data = this.route.snapshot.data['proprietarios']
   
   
  }
  redirectUrl(event){
    this.next.navigate([`proprietarios/${event}`]);
    
  }
}
