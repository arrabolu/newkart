import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { itemresolverResolver } from './services/itemresolver.resolver';
import { ContainerComponent } from './components/container/container.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: '', component:ContainerComponent , resolve : { items : itemresolverResolver }},
  {path : 'cart', component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
