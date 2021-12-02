import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedNovelsComponent } from './featured-novels.component';

const routes: Routes = [{ path: '', component: FeaturedNovelsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturedNovelsRoutingModule { }
