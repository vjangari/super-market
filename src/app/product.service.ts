import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Product } from './model/product';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  productsCollection: AngularFirestoreCollection<Product>;
  constructor(private af: AngularFirestore) {
    this.productsCollection = this.af.collection('products');
  }

  save(product: Product) {
    return this.productsCollection.add(product);
  }
  getAll() {
    return this.af.collection('products')
      .snapshotChanges().map(action => {
        return action.map(change => {
          const product = change.payload.doc.data() as Product;
          product.id = change.payload.doc.id;
          return product;
        });
      });
  }

}
