import { Component, OnInit } from '@angular/core';
import { ProprietariosService } from 'src/app/shared/utils/services/proprietarios.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-proprietarios',
  templateUrl: './proprietarios.component.html',
  styleUrls: ['./proprietarios.component.css']
})
export class ProprietariosComponent implements OnInit {
  
  $data: Observable<any>;
  columns: String[] = ['id', 'nome', 'email', 'nip', 'cnh', 'setor', 'posto', 'cartao']
  constructor(private proprietarioService: ProprietariosService) { }

  ngOnInit(): void {
   this.$data = this.proprietarioService.findByAll();
  }
  
}
