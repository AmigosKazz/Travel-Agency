import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SearchService} from "../voir-plus/service/searchService";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit{

  showScrollToTop = false;

  //reload page if click on logo
  reloadPage() {
    window.location.reload();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollToTop = !!(window.scrollY || document.documentElement.scrollTop || document.body.scrollTop > 600);
  }
  scrollToElement(elementClass: string) {
    const element = document.querySelector(`.${elementClass}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  constructor(public searchService: SearchService, ) {}


  ngOnInit() {

  }

}
