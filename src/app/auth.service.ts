import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AppUser } from './model/app.user';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/observable/of';

@Injectable()
export class AuthService {
  private firebaseUser: firebase.User;
  private user$: Observable<firebase.User>;

  constructor(private fireAuth: AngularFireAuth, private userService: UserService) {
    this.user$ = this.fireAuth.authState;
  }

  login() {
    this.fireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.userService.appUser = null;
    this.fireAuth.auth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    return this.user$.switchMap(user => {
      if(!user){
        return Observable.of(null);
      }
      this.firebaseUser = user;
      return this.userService.get(user.uid)
    }).switchMap(user => {
      if (!user) {
        if(!this.firebaseUser){
          return Observable.of(null);
        }
        return Observable.of({
          uid: this.firebaseUser.uid,
          displayName: this.firebaseUser.displayName,
          email: this.firebaseUser.email,
          phoneNumber: this.firebaseUser.phoneNumber,
          photoURL: this.firebaseUser.photoURL,
          isAdmin: false,
          createdDate: null
        })
      }else {
        user.displayName = this.firebaseUser.displayName;
        user.email = this.firebaseUser.email;
        user.photoURL = this.firebaseUser.photoURL;
        user.phoneNumber = this.firebaseUser.phoneNumber;
        return Observable.of(user);
      }
    });
  }

}
