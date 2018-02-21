import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  private currentTime : Date;
  
  ngOnInit(){
    setInterval(() => {
      this.currentTime = new Date();
    }, 500);
  }
}
