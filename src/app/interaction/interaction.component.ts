import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-interaction',
  template: `
    <h3>Interaction works!</h3>
    <h4>{{ parentData }}</h4>    
  `, //<button type="button" (click)="fireTest()">Get</button>
  styles: []
})
export class InteractionComponent implements OnInit {

  @Input() public parentData;

  @Output() public childData = new EventEmitter();

  constructor() { 
      
  }

  ngOnInit() {
      this.childData.emit('Contetnt send to Parent Component');
  }

  // fireTest(){
  //   this.childData.emit('Contetnt send to Parent Component');
  // }
}
