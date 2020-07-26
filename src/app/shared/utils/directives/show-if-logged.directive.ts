import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthserviceService } from '../services/authservice.service';
import { AccountService } from '../services/account.service';

@Directive({
  selector: '[showIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {
  subscription: Subscription;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private account: AccountService
  ) { }
    ngOnInit(){
      const displayValue = this.el.nativeElement.style.display;
      this.getStatusLogin(displayValue);
    }

    
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }

    private getStatusLogin(displayValue){
      this.subscription = this.account.isLoggedIn.subscribe(
        isLogged => {          
          this.renderer.setStyle(this.el.nativeElement, 'display',  isLogged ? displayValue : 'none');
        });
    }
}
