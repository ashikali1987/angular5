import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Hello App';
    public message = "";
    public parentName = "Content come from Parent interaction";

    public profileName:any = [];

    constructor(private serverdata : EmployeeService){
        
    }

    ngOnInit(){    
      this.serverdata.getHttpValue().subscribe(
        (data) => this.profileName = data
      )
    }
}
