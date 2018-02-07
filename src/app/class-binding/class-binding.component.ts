import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
      <h2 class="text-danger" [class]="textSuccess">Class Binding</h2>
      <h2 [class.text-style]="isSttyle">Class Binding</h2>
      <h3 [ngClass]="classmessages">Class Binding Ng Class</h3>
  `,
  styles: [`
      .text-success {
        color: green;
      }
      .text-danger {
        color: red;
      }
      .text-style {
        font-style: italic;
      }
  `]
})
export class ClassBindingComponent implements OnInit {
    public textSuccess = 'text-success';
    public hasError = false;
    public isSttyle = true;

    public classmessages = {
      'text-success' : !this.hasError,
      'text-danger' : this.hasError,
      'text-style' : this.isSttyle
    }
    constructor() { }

    ngOnInit() {
    }

}
