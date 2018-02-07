import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
    <h2 [style.color]="'blue'">Style Binding</h2>
    <h3 [style.color]="hasError ? 'red' : 'orange'"> binding works! </h3>
  `,
  styles: []
})
export class StyleBindingComponent implements OnInit {

  public hasError = true;

  constructor() { }

  ngOnInit() {
  }

}
