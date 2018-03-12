import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'sm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( userService: UserService, router: Router) {
    userService.appUser$.subscribe(appUser => {
      const user = userService.userSubject.getValue();
      
      if (user) {
        userService.save({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
          isAdmin: appUser ? appUser.isAdmin : false,
          createdDate: appUser ? appUser.createdDate : null
        })
      }

      let url = localStorage.getItem('redirectUrl');
      if(!url || (url && url === '/login')){
        url = '/home';
      }
      router.navigateByUrl(url);
    });
  }
}
