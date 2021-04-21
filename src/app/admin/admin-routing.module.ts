import { MovieListComponent } from './../main/home/movie-list/movie-list.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersModule } from './users/users.module';
import { UserListComponent } from './users/user-list/user-list.component';
import { MovieComponent } from '../main/movie/movie.component';
import { MovieModule } from './movie/movie.module';

const routes: Routes = [
  {
    path:"", //admin
    component:AdminLayoutComponent,
    children:[
      {path:'',redirectTo:"users"},
      {path:'users',loadChildren:()=>UsersModule},
      {path:'movies',loadChildren:()=> MovieModule}
    ]
  }
  // {path:"", redirectTo :'users'},
  // {path:"users",loadChildren: () => UsersModule}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
