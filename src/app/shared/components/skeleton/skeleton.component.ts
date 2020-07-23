import { Component, OnInit, Input } from '@angular/core';
import { style } from '@angular/animations';

@Component({
  selector: 'skeleton',
  template: `
    <div [ngStyle]="getStyles()" class="skelt-load loader" ></div>
  `,
  styleUrls: ['./skeleton.component.css']
})
export class SkeletonComponent implements OnInit {
  @Input() Cwidth;
  @Input() Cheight;
  @Input() circle: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  public getStyles(){
    const styles = {
      'width.px' : this.Cwidth ? this.Cwidth : '',
      'height.px' : this.Cheight ? this.Cheight : '',
      'border-radius' : this.circle ? '50%' : ''
    };
    return styles;
  }
}
