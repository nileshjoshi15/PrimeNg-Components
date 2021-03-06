import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindcustompropdemo',
  templateUrl: './bindcustompropdemo.component.html',
  styleUrls: ['./bindcustompropdemo.component.css']
})
export class BindcustompropdemoComponent implements OnInit {
  artists:ArtistEn[];

  constructor() {
    this.artists = [
      {
        "nm": "Harthacanut",
        "cty": "United Kingdom",
        "hse": "House of Denmark",
        "yrs": "1040-1042"
      },
      {
        "nm": "Edward the Confessor",
        "cty": "United Kingdom",
        "hse": "House of Wessex",
        "yrs": "1042-1066"
      },
      {
        "nm": "Harold II",
        "cty": "United Kingdom",
        "hse": "House of Wessex",
        "yrs": "1066"
      },
      {
        "nm": "William I",
        "cty": "United Kingdom",
        "hse": "House of Normandy",
        "yrs": "1066-1087"
      }
        ];
  }

  ngOnInit() {
  }

}
interface ArtistEn{
  nm: string,
  cty: string,
  hse: string,
  yrs: string
}


const arrList=[
  {
    "nm": "Harthacanut",
    "cty": "United Kingdom",
    "hse": "House of Denmark",
    "yrs": "1040-1042"
  },
  {
    "nm": "Edward the Confessor",
    "cty": "United Kingdom",
    "hse": "House of Wessex",
    "yrs": "1042-1066"
  },
  {
    "nm": "Harold II",
    "cty": "United Kingdom",
    "hse": "House of Wessex",
    "yrs": "1066"
  },
  {
    "nm": "William I",
    "cty": "United Kingdom",
    "hse": "House of Normandy",
    "yrs": "1066-1087"
  },
  {
    "nm": "William II",
    "cty": "United Kingdom",
    "hse": "House of Normandy",
    "yrs": "1087-1100"
  },
  {
    "nm": "Henry I",
    "cty": "United Kingdom",
    "hse": "House of Normandy",
    "yrs": "1100-1135"
  },
  {
    "nm": "Stephen",
    "cty": "United Kingdom",
    "hse": "House of Blois",
    "yrs": "1135-1154"
  },
  {
    "nm": "Henry II",
    "cty": "United Kingdom",
    "hse": "House of Angevin",
    "yrs": "1154-1189"
  },
  {
    "nm": "Richard I",
    "cty": "United Kingdom",
    "hse": "House of Angevin",
    "yrs": "1189-1199"
  },
  {
    "nm": "John",
    "cty": "United Kingdom",
    "hse": "House of Angevin",
    "yrs": "1199-1216"
  },
  {
    "nm": "Henry III",
    "cty": "United Kingdom",
    "hse": "House of Plantagenet",
    "yrs": "1216-1272"
  },
  {
    "nm": "Edward I",
    "cty": "United Kingdom",
    "hse": "House of Plantagenet",
    "yrs": "1272-1307"
  },
  {
    "nm": "Edward II",
    "cty": "United Kingdom",
    "hse": "House of Plantagenet",
    "yrs": "1307-1327"
  },
  {
    "nm": "Edward III",
    "cty": "United Kingdom",
    "hse": "House of Plantagenet",
    "yrs": "1327-1377"
  },
  {
    "nm": "Richard II",
    "cty": "United Kingdom",
    "hse": "House of Plantagenet",
    "yrs": "1377-1399"
  },
  {
    "nm": "Henry IV",
    "cty": "United Kingdom",
    "hse": "House of Lancaster",
    "yrs": "1399-1413"
  },
  {
    "nm": "Henry V",
    "cty": "United Kingdom",
    "hse": "House of Lancaster",
    "yrs": "1413-1422"
  },
  {
    "nm": "Henry VI",
    "cty": "United Kingdom",
    "hse": "House of Lancaster",
    "yrs": "1422-1461"
  },
  {
    "nm": "Edward IV",
    "cty": "United Kingdom",
    "hse": "House of York",
    "yrs": "1461-1483"
  },
  {
    "nm": "Edward V",
    "cty": "United Kingdom",
    "hse": "House of York",
    "yrs": "1483"
  },
  {
    "nm": "Richard III",
    "cty": "United Kingdom",
    "hse": "House of York",
    "yrs": "1483-1485"
  },
  {
    "nm": "Henry VII",
    "cty": "United Kingdom",
    "hse": "House of Tudor",
    "yrs": "1485-1509"
  },
  {
    "nm": "Henry VIII",
    "cty": "United Kingdom",
    "hse": "House of Tudor",
    "yrs": "1509-1547"
  },
  {
    "nm": "Edward VI",
    "cty": "United Kingdom",
    "hse": "House of Tudor",
    "yrs": "1547-1553"
  },
  {
    "nm": "Mary I",
    "cty": "United Kingdom",
    "hse": "House of Tudor",
    "yrs": "1553-1558"
  },
  {
    "nm": "Elizabeth I",
    "cty": "United Kingdom",
    "hse": "House of Tudor",
    "yrs": "1558-1603"
  },
  {
    "nm": "James I",
    "cty": "United Kingdom",
    "hse": "House of Stuart",
    "yrs": "1603-1625"
  },
  {
    "nm": "Charles I",
    "cty": "United Kingdom",
    "hse": "House of Stuart",
    "yrs": "1625-1649"
  },
  {
    "nm": "Commonwealth",
    "cty": "United Kingdom",
    "hse": "Commonwealth",
    "yrs": "1649-1653"
  },
  {
    "nm": "Oliver Cromwell",
    "cty": "United Kingdom",
    "hse": "Commonwealth",
    "yrs": "1653-1658"
  },
  {
    "nm": "Richard Cromwell",
    "cty": "United Kingdom",
    "hse": "Commonwealth",
    "yrs": "1658-1659"
  }]
