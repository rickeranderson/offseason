import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogContainerComponent } from './blog-container/blog-container.component';
import { BlogRoutingModule } from './blog-routing.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    CoreModule
  ],
  declarations: [BlogContainerComponent]
})
export class BlogModule { }
