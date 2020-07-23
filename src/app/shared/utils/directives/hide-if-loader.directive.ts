import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountService } from '../services/account.service';

@Directive({
  selector: '[HideIfLoader]'
})
export class HideIfLoaderDirective implements OnInit {
  subscription: Subscription;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private account: AccountService
  ) { }
    ngOnInit(){
      console.log('hide ');
      const displayValue = this.el.nativeElement.style.display;
      this.getStatusLogin(displayValue);
    }

    
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }

    private getStatusLogin(displayValue){
      this.subscription = this.account.isLoading.subscribe(
        isLogged => {  
          console.log("teste" + isLogged);
          
          this.renderer.setStyle(this.el.nativeElement, 'display',  isLogged ? 'none' : displayValue );
        });
    }
}
