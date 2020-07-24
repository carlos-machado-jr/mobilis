import { Component, OnInit } from '@angular/core';
import { ProprietarioService } from '../../services/proprietario.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'lista-skeleton',
  templateUrl: './lista-skeleton.component.html',
  styleUrls: ['./lista-skeleton.component.css']
})
export class ListaSkeletonComponent implements OnInit {
  isLog: Subject<boolean>;

  constructor(
    private service: ProprietarioService

  ) { }

  ngOnInit(): void {
   this.isLog = this.service.isTeste;

  }

}
