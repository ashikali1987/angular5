import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: `<div class="interpolation">
      <h2 id="h2" class="title">Welcome to {{interpolationTitle}}</h2>
      <h2>{{"String " + interpolationTitle.length }}</h2>
      <h2>{{ 3 + 3 }}</h2>
      <a href="{{ siteUrl }}">{{ siteUrl }}</a>
      <h3>{{ myExample() }}</h3>
      <h3>{{ a + b }}</h3>
  </div>`, //{{a= 3+3 }}
  styles: []
})
export class InterpolationComponent implements OnInit {

  public interpolationTitle = "Interpolation";
  //public querySlect = document.getElementById('h2');
  //querySlect.style.backgroundColor = "red";
  
  a = 10;
  b = 20;

  public siteUrl = window.location.href;

  constructor() { }

  myExample(){
    return "My Example " + this.interpolationTitle;
  }

  ngOnInit() {
  }

}
