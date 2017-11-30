import { Injectable } from '@angular/core';

@Injectable()
export class LinksService {

  authServiceLink: string;
  userServiceLink: string;





 constructor() {
    this.authServiceLink = 'http://172.23.238.184:8087';
    this.userServiceLink = 'http://172.23.238.184:8087/users/';

  }

}
