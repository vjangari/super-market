import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
import { ManageOrdersComponent } from './admin/manage-orders/manage-orders.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'shopping-cart',        component: ShoppingCartComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'my-orders', component: MyOrdersComponent },
    { path: 'products', component: ProductsComponent },
    
    { path: 'login', component: LoginComponent },

    { path: 'admin/products', component: ManageProductsComponent },
    { path: 'admin/orders', component: ManageOrdersComponent },

    { path: '**', component: HomeComponent }
  ];