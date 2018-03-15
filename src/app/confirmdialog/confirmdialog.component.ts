import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ConfirmationService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';


@Component({
  selector: 'app-confirmdialog',
  templateUrl: './confirmdialog.component.html',
  styleUrls: ['./confirmdialog.component.css']
})
export class ConfirmdialogComponent implements OnInit {

  constructor(private confirmationService: ConfirmationService) {}
  message:string;
  confirm() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to perform this action?',
            accept: () => {
                //Actual logic to perform a confirmation
                this.message="yes"
            },reject: () => {
                this.message="no"
            }
        });
    }

  ngOnInit() {
  }

}
