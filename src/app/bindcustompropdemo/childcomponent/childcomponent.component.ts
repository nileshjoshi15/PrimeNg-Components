import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {
  @Input() element: {
              nm: string,
              cty: string,
              hse: string,
              yrs: string
            }

  constructor() { }

  ngOnInit() {
  }

}
