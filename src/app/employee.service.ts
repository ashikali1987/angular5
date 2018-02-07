import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import "rxjs/Rx";

@Injectable()
export class EmployeeService {

  public name;
  public profile;

  constructor(private httpClient: HttpClient) { }

  getEmployee(){
    return [
      { 'id' : 1, 'name' : 'Ashik', 'place' : 'Mayilai'},
      { 'id' : 2, 'name' : 'Mubarak', 'place' : 'Dubai'},
      { 'id' : 3, 'name' : 'Marjook', 'place' : 'Chennai'},
      { 'id' : 4, 'name' : 'Bari', 'place' : 'London'},
      { 'id' : 5, 'name' : 'Shahul', 'place' : 'Abu Dubai'}
    ];
  }

  getHttpValue(){
       return this.httpClient.get('https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles')
       .map((response) => {
            return response;
        });
      //.subscribe( 
      //     data => {
      //       this.profile = data;
      //       console.log(this.profile[0].name);
      // });
  }

}
