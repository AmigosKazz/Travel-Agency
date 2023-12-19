import { Component } from '@angular/core';
import {SearchService} from "./service/searchService";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isOpen = true;

  constructor(public searchService: SearchService) {}
}
