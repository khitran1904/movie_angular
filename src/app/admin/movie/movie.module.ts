import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';


@NgModule({
  declarations: [AddMovieComponent, MovieListComponent, UpdateMovieComponent],
  imports: [
    CommonModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
