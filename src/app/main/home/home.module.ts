import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
// import { CrouselComponent } from './crousel/crousel.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [HomeComponent, MovieListComponent, CarouselComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
