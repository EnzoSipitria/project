import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechahs'
})
export class FechaPipe implements PipeTransform {

  transform(value: Date, args?: any): any {
    if(value){
      let mins = value.getMinutes();
      let minString = mins.toString();
      if(mins < 10) minString = "0" + mins.toString();
      return value.getHours().toString() + ":" + minString;
    }
    return "";
  }

}
