import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProprietarioService } from 'src/app/modules/proprietarios/services/proprietario.service';

@Directive({
  selector: '[hideIfLoader]'
})
export class HideIfLoaderDirective implements OnInit {
  subscription: Subscription;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private service: ProprietarioService
  ) { }
    ngOnInit(){
      const displayValue = this.el.nativeElement.style.display;
      this.getStatusLogin(displayValue);
    }

    
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }

    private getStatusLogin(displayValue){
      this.subscription = this.service.isTeste.subscribe(
        isLogged => {   
          console.log( "diretiva " + isLogged);
                 
          this.renderer.setStyle(this.el.nativeElement, 'display',  isLogged ? 'none' : displayValue);
        });
    }
}
