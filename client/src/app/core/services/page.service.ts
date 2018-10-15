import { Injectable } from '@angular/core';
import { PageListing } from '../models/page-listing.model';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor() { }

  getPages() {
    const pageList: PageListing[] = [
      {
        icon: 'create',
        routePath: '/blog',
        tooltip: 'Blog'
      },
      {
        icon: 'code',
        routePath: '/projects',
        tooltip: 'Projects'
      },
      {
        icon: 'person',
        routePath: '/about',
        tooltip: 'About Me'
      },
    ];
    return pageList;
  }
}
