import { Injectable } from '@angular/core';
import { Blogs as blogs} from '../../data/blogs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  tags: Tag[] = [];
  index = 0;

  constructor() {
    blogs.forEach(b => {
      b.tags.forEach(t => {
        this.tags.push({
          id: this.index,
          name: t
        } as Tag);
        this.index = this.index + 1;
      });
    });

    console.log('tags', this.tags);
  }

  getAllBlogs() {
    return blogs;
  }

  getBlogById(idx: number): Blog {
    return blogs.find(x => x.id === idx);
  }

  getAllBlogsBySingleTagId(tagId: number): Blog[] {
    const tagName = this.tags.find(x => x.id === tagId).name;
    return blogs.filter(x => x.tags.includes(tagName));
  }

  getAllBlogsByMultipleTags(tagIds: number[]): Blog[] {
    const list: Blog[] = [];
    tagIds.forEach(id => {
      const tmpBlogList = this.getAllBlogsBySingleTagId(id);
      tmpBlogList.forEach(b => {
        if (!list.find(x => x.id === b.id)) {
          list.push(b);
        }
      });
    });
    return list;
  }

  getAllTags() {
    return this.tags;
  }
}

export interface Blog {
  id: number;
  title: string;
  content: string;
  tags: string[];
}

export interface Tag {
  id: number;
  name: string;
}
