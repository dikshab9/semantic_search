import { Injectable } from '@angular/core';

@Injectable()
export class LinksService {

  authServiceLink: string;
  userServiceLink: string;





 constructor() {
    this.authServiceLink = 'http://oauth:8087';
    this.userServiceLink = 'http://oauth:8087/users/';
  }
}
