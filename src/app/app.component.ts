import { Component } from '@angular/core';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { isAdmin } from '@firebase/util';
import { AppUser } from './model/app.user';
import { User } from 'firebase/app';

@Component({
  selector: 'sm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(authService: AuthService, userService: UserService) {
    authService.appUser$.subscribe(user => {
      if(user){
        userService.save(user);
      }
    });
  }
}
