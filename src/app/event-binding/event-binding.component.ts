import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <h2 [style.background]="bgColor">
      event-binding works! {{ events }}
    </h2>
    <button type="button" (click)="changeBg($event)">Change BG</button>
  `,
  styles: []
})
export class EventBindingComponent implements OnInit {

  public bgColor = "";
  public events = "";

  constructor() { }

  ngOnInit() {
  }

  changeBg(event){
    console.log(event);
    this.events = event.offsetX;
    this.bgColor = "green";
  }

}
