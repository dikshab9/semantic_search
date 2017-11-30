import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from './user';

// import { User } from '../_models/index';
// import { UserProfile } from '../_models/user-profile';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    private user: User;
    

    getCurrentUser(): User{
        return this.user;
    }

    createUser(user: User) {
        // call a service and create an user
    }

    setUser(user: User) {
        this.user = user;
    }

    getUserName(): string {
        return this.user.userName;
    }

    login(user: User) {
        this.setUser(user);
        return true;
    }
    loginTrue():boolean{
      if(this.getCurrentUser()==null)
      return false;
      else
      return true;  
    }
    

    logout() {
        this.user = null;
    }
    
}