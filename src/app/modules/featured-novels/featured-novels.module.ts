import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeaturedNovelsRoutingModule } from './featured-novels-routing.module';
import { FeaturedNovelsComponent } from './featured-novels.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { MatCardModule} from '@angular/material/card'

@NgModule({
  declarations: [
    FeaturedNovelsComponent
  ],
  imports: [
    CommonModule,
    FeaturedNovelsRoutingModule,
    NgbModule,
    IvyCarouselModule,
    MatCardModule
  ],
  exports:[FeaturedNovelsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeaturedNovelsModule { }
