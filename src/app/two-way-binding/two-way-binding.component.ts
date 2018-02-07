import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <H1>Two Way Binding works!</H1>
    <input [(ngModel)]="name" type="text">
    {{ name }}
  `,
  styles: []
})
export class TwoWayBindingComponent implements OnInit {

  public name = "";
  constructor() { }

  ngOnInit() {
  }

}
