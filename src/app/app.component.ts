import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ConfirmationService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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


  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(value:NgForm){
    console.log(value);
  }
}
