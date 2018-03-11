import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AppUser } from './model/app.user';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthService } from './auth.service';
import 'rxjs/observable/of';
import { User } from 'firebase/app';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {
  public readonly appUser$: Observable<AppUser>;
  public userSubject: BehaviorSubject<firebase.User>;

  constructor(private afStore: AngularFirestore, private authService: AuthService) {
    this.userSubject = new BehaviorSubject(null);
    this.appUser$ = authService.firebaseUser$.switchMap(fbUser => {
      this.userSubject.next(fbUser);
      if (fbUser && fbUser.uid) {
        return this.get(fbUser.uid)
      } else {
        return Observable.of(null);
      }
    });
  }

  private setUser(appUser: AppUser) {
    this.afStore.doc<AppUser>('users/' + appUser.uid).set(appUser);
  }
  private updateUser(appUser: Partial<AppUser>) {
    return this.afStore.doc<AppUser>('users/' + appUser.uid).update(appUser);
  }
  public get(uid: string): Observable<AppUser> {
    return this.afStore.doc<AppUser>('users/' + uid).valueChanges();
  }

  save(appUser: AppUser) {
    if (appUser.createdDate) {
      this.updateUser({
        uid: appUser.uid,
        displayName: appUser.displayName,
        email: appUser.email,
        phoneNumber: appUser.phoneNumber,
        photoURL: appUser.photoURL
      })
    } else {
      appUser.createdDate = new Date();
      this.setUser(appUser);
    }
  }
}
