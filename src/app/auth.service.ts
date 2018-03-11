import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AppUser } from './model/app.user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  public readonly firebaseUser$: Observable<firebase.User>;

  constructor(private fireAuth: AngularFireAuth) {
    this.firebaseUser$ = this.fireAuth.authState;
  }

  login() {
    this.fireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logout() { 
    this.fireAuth.auth.signOut();
  }

}
