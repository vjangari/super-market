import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Category } from './model/category';

@Injectable()
export class CategoryService {

  constructor(private afStore: AngularFirestore) { }

  public getCategories() {

    return this.afStore.collection('categories', ref => ref.orderBy('name')).snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Category;
        const id = a.payload.doc.id;
        data.id = id;
        return data;
      });
    });
  }
}
