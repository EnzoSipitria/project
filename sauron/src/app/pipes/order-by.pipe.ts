import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby'
})
export class OrderByPipe implements PipeTransform {



  transform(array: Array<any>, args?) {

    // Check if array exists, in this case array contains articles and args is an array that has 1 element : !id

    if (array) {
      let aux = args;
      console.log(aux)
      let byVal;
      // get the first element
      let orderByValue;
      // if (typeof args === 'undefined'){
      //   args='llegadaRDC';
      orderByValue = args;
      byVal = 1;
      // }else{
      // check if exclamation point 

      if (orderByValue.charAt(0) == "!") {
        // reverse the array
        byVal = -1
      }
      // console.log("order by this column"+array);
      if (orderByValue=='anden'){
        array.sort((a: any, b: any) => {
          // console.log(a[orderByValue] + " anden  criterio de comparacion " + b[orderByValue])
          if (parseInt(a[orderByValue]) === null) {
            return 1;
          } else if (parseInt(b[orderByValue]) === null) {
            return -1;
          } else if (parseInt(a[orderByValue]) < parseInt(b[orderByValue])) {
              return -1 * byVal;
            } else if (parseInt(a[orderByValue]) > parseInt(b[orderByValue])) {
              return 1 * byVal;
            } else {
              return 0;
            }
        });
      }else
      array.sort((a: any, b: any) => {
        // console.log(a[orderByValue] + "  criterio de comparacion " + b[orderByValue])
        if (a[orderByValue] === null) {
          return 1;
        } else if (b[orderByValue] === null) {
          return -1;
        } else if (a[orderByValue] < b[orderByValue]) {
            return -1 * byVal;
          } else if (a[orderByValue] > b[orderByValue]) {
            return 1 * byVal;
          } else {
            return 0;
          }
      });
      return array;
    }

    
  }


}