import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'currencypipe'
})
export class CurrencypipePipe extends CurrencyPipe {

  transform(value: any): string {
      if(value && value.length >0){
        value = value.length === 1 ? value : value.substring(1)
        return super.transform(value, 'USD',true,'1.0-2');
      }
  }
}
