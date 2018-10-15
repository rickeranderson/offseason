import { Component, OnInit } from '@angular/core';
import { BlogService, Blog } from '../services/blog.service';

@Component({
  selector: 'app-blog-container',
  templateUrl: './blog-container.component.html',
  styleUrls: ['./blog-container.component.scss']
})
export class BlogContainerComponent implements OnInit {
  blogs: Blog[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogs = this.blogService.getAllBlogs();
  }

}
