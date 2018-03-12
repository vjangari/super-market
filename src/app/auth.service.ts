import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AppUser } from './model/app.user';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  public readonly firebaseUser$: Observable<firebase.User>;

  constructor(private fireAuth: AngularFireAuth, private router: Router) {
    this.firebaseUser$ = this.fireAuth.authState;
  }

  login() {
    localStorage.setItem('redirectUrl', this.router.url);
    this.fireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logout() { 
    this.fireAuth.auth.signOut();
  }

}
