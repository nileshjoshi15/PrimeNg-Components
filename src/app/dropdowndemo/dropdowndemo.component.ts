import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { City } from '../service/city';
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-dropdowndemo',
  templateUrl: './dropdowndemo.component.html',
  styleUrls: ['./dropdowndemo.component.css'],
  providers:[DataService,City]
})
export class DropdowndemoComponent implements OnInit {
  cities:City[];
  constructor(private dataservice: DataService,private data:City) {}

  ngOnInit() {
    this.dataservice.getLossType()
                .subscribe(
                  (res:City[])=>{
                    this.cities=res;
                    console.log(res);
                    this.data=this.cities[2];
                  },
                  (error)=>console.log(error)
                );


  }

}
