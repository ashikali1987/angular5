import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  template: `
      ------------------------------------------
      <h2>Employee List</h2>
      <ul *ngFor="let empl of employees">
          <li>{{ empl.id }} - {{ empl.name }} - {{ empl.place }}</li>
      </ul>
  `,
  styles: []
})
export class EmployeeDetailsComponent implements OnInit {

    public employees = [];

    constructor( private _empData : EmployeeService ) { }

    ngOnInit() {
      this.employees = this._empData.getEmployee();
    }

}
