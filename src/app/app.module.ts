import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService} from 'primeng/api';
import { ConfirmdialogComponent } from './confirmdialog/confirmdialog.component';
import { CurrencypipePipe } from './custompipe/currencypipe.pipe';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmdialogComponent,
    CurrencypipePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ConfirmDialogModule
  ],
  providers: [ConfirmationService,CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
