import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AppUser } from './model/app.user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
public appUser: AppUser;
  constructor(private afStore: AngularFirestore) { 
  }

  private setUser(appUser: AppUser){
    this.afStore.doc<AppUser>('users/'+appUser.uid).set(appUser);
  }
  private updateUser(appUser: Partial<AppUser>){
    return this.afStore.doc<AppUser>('users/'+appUser.uid).update(appUser);
  }
  public get(uid: string): Observable<AppUser>{
     return this.afStore.doc<AppUser>('users/'+uid).valueChanges();
  }
  save(appUser: AppUser){
    if(appUser.createdDate){
        this.updateUser({
          uid: appUser.uid,
          displayName: appUser.displayName,
          email: appUser.email,
          phoneNumber: appUser.phoneNumber,
          photoURL: appUser.photoURL
        })
    }else{
      appUser.createdDate = new Date();
      this.setUser(appUser);
    }
    this.appUser = appUser;
    console.log("App User:"+ this.appUser);
  
  }
}
