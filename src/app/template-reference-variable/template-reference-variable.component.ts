import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable',
  template: `
      <h2>Template Reference Variable</h2>
      <input #inputValue type="text">
      <button type="button" (click)="template(inputValue.value)">Get Value</button>
  `,
  styles: [``]
})
export class TemplateReferenceVariableComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    template(inputValue){
      alert(inputValue);
    }

}
