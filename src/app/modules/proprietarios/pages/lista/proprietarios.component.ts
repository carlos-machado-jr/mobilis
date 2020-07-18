import { Component, OnInit } from '@angular/core';
import { ProprietariosService } from 'src/app/shared/utils/services/proprietarios.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proprietarios',
  templateUrl: './proprietarios.component.html',
  styleUrls: ['./proprietarios.component.css']
})
export class ProprietariosComponent implements OnInit {
  
  data: any[];
  columns: String[] = ['id', 'nome', 'email', 'nip', 'cnh', 'setor', 'posto', 'cartao']
  constructor(
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
   this.data = this.route.snapshot.data['proprietarios']
  }
  
}
