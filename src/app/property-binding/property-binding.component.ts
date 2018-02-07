import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `<input type="text" [value]="Dvalues" [disabled]="isDisabled">
    <br>
    <input type="text" bind-value="Dvalues" [disabled]="isDisabled"> <br>
    <button (click)="doDisabled()">Disable</button>
    <button (click)="doEnabled()">Enable</button>
    `,
  styles: ['']
})
export class PropertyBindingComponent implements OnInit {

  public Dvalues = "Ashik Ali";
  public isDisabled = false;
  constructor() { }

  ngOnInit() {
  }

  doDisabled(){  
      this.isDisabled = true;
  }
  doEnabled(){  
    this.isDisabled = false;
}

}
