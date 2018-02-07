import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
    <h3>pipes works!</h3>
    <h4>{{ name | lowercase }}</h4>
    <h4>{{ name | uppercase }}</h4>
    <h4>{{ name | titlecase }}</h4>
    <h4>{{ name | slice:2 }}</h4>
    <h4>{{ name | slice:2:8 }}</h4>

    <h4>{{ 1.568 | number:'2.1-2' }}</h4>

    <h4>{{ 1.568 | currency:'EUR':'symbol-narrow' }}</h4>

    <h4>{{ 0.25 | percent }}</h4>

    <h4>{{ object | json }}</h4>

    <h4>{{ date }}</h4>

    <h4>{{ date | date:'shortDate' }}</h4>

    <h4>{{ date | date:'d/M/y' }}</h4>
  `,
  styles: []
})
export class PipesComponent implements OnInit {

  public name = 'Ashik ali samena begam';

  public date = new Date();

  public object = {
    firstName : 'Ashik',
    lastname  : 'Ali',
    surName : 'Asfira'
  }

  constructor() { }

  ngOnInit() {
  }

}
