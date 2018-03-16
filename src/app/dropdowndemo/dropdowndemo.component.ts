import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdowndemo',
  templateUrl: './dropdowndemo.component.html',
  styleUrls: ['./dropdowndemo.component.css']
})
export class DropdowndemoComponent implements OnInit {
  selectedCity: City;

  cities:City[];


  constructor() {
    this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbulfas fasfasdf', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
  }

  ngOnInit() {
  }

}


interface City {
  name: string;
  code: string;
}
