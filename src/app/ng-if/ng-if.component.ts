import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  template: `
        <h1>{{ title }}</h1>
        
        <div *ngIf="isCondition;then view else viewss">True Condition</div>
        <ng-template #view>True conditions xmcnvbxjvcbnj</ng-template> <br><br>

        <div *ngIf="isValid;then content else other_content">here is ignored</div>
        <ng-template #content>content here...</ng-template>
        <ng-template #other_content>other content here...</ng-template>

        <div *ngIf="isCondition; then checkin else checkout"></div>
        <ng-template #checkin><h3>OKKKKK</h3></ng-template>
        <ng-template #checkout><h3>NOOOOOO</h3></ng-template>

        <br>------------------------------------------------------------------<br>
        <div [ngSwitch]="color">
            <div *ngSwitchCase="'red'">You are select RED</div>
            <div *ngSwitchCase="'green'">You are select GREEN</div>
            <div *ngSwitchCase="'blue'">You are select BLUE</div>
            <div *ngSwitchDefault>You are select NONE</div>
        </div>

        <br>------------------------------------------------------------------<br>

        <ul *ngFor="let color of colors; index as i">
            <li>{{i + 1}} - {{ color }}</li>
        </ul>
    `,
  styles: []
})
export class NgIfComponent implements OnInit {

    public title = "Structural Directive";
    public name = false;

    public isValid = true;

    public isCondition = false;

    public color = "redes";

    public colors = ['red', 'green', 'blue', 'yellow', 'orange', 'pink']

    constructor() { }

    ngOnInit() {
    }

}
