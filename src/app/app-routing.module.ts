import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { ItemComponent } from './item/item.component';


const routes: Routes = [
  { path: 'route-item', component: ItemComponent },
  { path: 'route-card', component: CardComponent },
  { path: '', redirectTo: '/route-item', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
