import { Injectable } from '@angular/core';

@Injectable()
export class ConnectionService {

  online : boolean;

  constructor() {
    this.online = true;
    setTimeout(() => {
      this.online = false;
    }, 35000);
   }

}
