import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import { DataTableModule} from 'primeng/datatable';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmationService} from 'primeng/api';

import { ConfirmdialogComponent } from './confirmdialog/confirmdialog.component';
import { CurrencypipePipe } from './custompipe/currencypipe.pipe';
import { DatatabledemoComponent } from './datatabledemo/datatabledemo.component';
import { DropdowndemoComponent } from './dropdowndemo/dropdowndemo.component';
import { BindcustompropdemoComponent } from './bindcustompropdemo/bindcustompropdemo.component';
import { ChildcomponentComponent } from './bindcustompropdemo/childcomponent/childcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmdialogComponent,
    CurrencypipePipe,
    DatatabledemoComponent,
    DropdowndemoComponent,
    BindcustompropdemoComponent,
    ChildcomponentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ConfirmDialogModule,
    DataTableModule,
    DropdownModule
  ],
  providers: [ConfirmationService,CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
