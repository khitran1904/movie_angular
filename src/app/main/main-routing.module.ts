import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutModule } from './checkout/checkout.module';
import { HomeModule } from './home/home.module';
import { MovieModule } from './movie/movie.module';


// pathMatch:"full" : kiểm tra path phải khớp 100%
const routes: Routes = [
  // {path:"movie",pathMatch:"full", loadChildren : () => MovieModule },
  // {path:"", loadChildren : () => HomeModule },
  {path:"checkout",pathMatch:"full", loadChildren : () => CheckoutModule },
  
  {path:"",component:MainLayoutComponent,
  children:[
    {path:"", loadChildren : () => HomeModule },
    {path:"movie",pathMatch:"full", loadChildren : () => MovieModule },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
