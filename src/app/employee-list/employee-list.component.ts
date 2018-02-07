import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
    ------------------------------------------
    <h2>Employee List</h2>
    <ul *ngFor="let empl of employess">
        <li>{{ empl.name }}</li>
    </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  public employess = [];

  constructor(private _employeeData : EmployeeService ) { }

  ngOnInit() {
    this.employess = this._employeeData.getEmployee();
  }

}
