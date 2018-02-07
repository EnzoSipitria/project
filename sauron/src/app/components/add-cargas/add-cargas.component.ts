import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-cargas',
  templateUrl: './add-cargas.component.html',
  styleUrls: ['./add-cargas.component.css']
})
export class AddCargasComponent implements OnInit {
  constructor() { }




  eventHandler(event) {
    // console.log(event);
    switch (event.key) {
      case 'p':
        console.log("hello p");
        break;
        case 'l':
        console.log("hello l");
        break;
        case 'a':
        console.log("hello a");
        break;
    
      default:
      console.log("hello others");
        break;
    }
 } 


  ngOnInit() {
  }

}
