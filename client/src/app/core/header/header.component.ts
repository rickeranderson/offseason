import { Component, OnInit } from '@angular/core';
import { PageService } from '../services/page.service';
import { PageListing } from '../models/page-listing.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pages: PageListing[] = [];

  constructor(private pageService: PageService, private router: Router) { }

  ngOnInit() {
    this.getPages();
  }

  getPages() {
    this.pages = this.pageService.getPages();
  }
}
