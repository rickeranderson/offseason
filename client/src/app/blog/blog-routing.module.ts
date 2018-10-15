import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogContainerComponent } from './blog-container/blog-container.component';

const routes: Routes = [
  {
    path: '',
    component: BlogContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
