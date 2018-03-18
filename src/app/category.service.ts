import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Category } from './model/category';

@Injectable()
export class CategoryService {

  constructor(private afStore: AngularFirestore) { }

  public getCategories() {
    return this.afStore
      .collection('categories', ref => ref.orderBy('name'))
      .snapshotChanges().map(actions => {
        return actions.map(change => {
          const data = change.payload.doc.data() as Category;
          data.id = change.payload.doc.id;
          return data;
        });
      });
  }
}
