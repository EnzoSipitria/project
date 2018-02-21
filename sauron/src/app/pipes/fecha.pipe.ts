import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechahs'
})
export class FechaPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if(value){
      let date = new Date(Date.parse(value));
      let mins = date.getMinutes();
      let minString = mins.toString();
      if(mins < 10) minString = "0" + mins.toString();
      return date.getHours().toString() + ":" + minString;
    }
    return "-";
  }

}
