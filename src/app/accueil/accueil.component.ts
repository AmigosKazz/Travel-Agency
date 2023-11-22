import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit{
  showScrollToTop = false;

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
  ngOnInit() {

  }

}
