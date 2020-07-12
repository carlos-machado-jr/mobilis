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
      const valorDisplay = this.el
      .nativeElement
      .style
      .display;
      this.subscription = this.account.isLoggedIn.subscribe(
        status => {
          console.log(status);
          
          this.renderer.setStyle(this.el.nativeElement,
            'display',
            status ?  valorDisplay : 'none');
        });
    }

    getStatusLogin(valorDisplay){
      this.subscription = this.account.isLoggedIn.subscribe(
        status => {
          console.log(status);
          
          this.renderer.setStyle(this.el.nativeElement,
            'display',
            status ? valorDisplay : 'none');
        });
    }
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
}
