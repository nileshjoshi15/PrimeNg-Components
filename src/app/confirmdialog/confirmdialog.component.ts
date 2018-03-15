import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@Component({
  selector: 'app-confirmdialog',
  templateUrl: './confirmdialog.component.html',
  styleUrls: ['./confirmdialog.component.css']
})
export class ConfirmdialogComponent implements OnInit {

  constructor(private confirmationService: ConfirmationService) {

  }
  message:string;

  confirmTest(){
        var a;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to perform this action?',
            accept: () => {
              this.message = 'OK';
            },reject: () => {
              this.message = 'NO';
            }
        });
        return a;
    }

  ngOnInit() {
  }

  test(){
    this.confirmTest();
    if(this.message==='OK'){
      alert('it is ok');
    }else{
      alert('NO ok');
    }
  }
}
