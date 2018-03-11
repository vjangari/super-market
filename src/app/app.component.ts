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
    userService.appUser$.subscribe(appUser => {
      if (!appUser) {
        const user = userService.userSubject.getValue();
        if (user) {
          userService.save({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            isAdmin: false,
            createdDate: null
          })
        }
      }
    });
  }
}
