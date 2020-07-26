import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ProprietarioService } from 'src/app/modules/proprietarios/services/proprietario.service';

@Component({
  selector: 'teste-skeleton',
  templateUrl: './teste-skeleton.component.html',
  styleUrls: ['./teste-skeleton.component.css']
})
export class TesteSkeletonComponent implements OnInit {
  isLog: Subject<boolean>;

  constructor(
    private service: ProprietarioService


  ) { }

  ngOnInit(): void {
   this.isLog = this.service.isTeste;

  }
}
