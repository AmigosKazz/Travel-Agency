import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import * as AOS from 'aos';
import {ImageListeModel} from "./models/imageListe.model";
import {ImageListeService} from "./service/imageListe.service";
import {SearchService} from "./service/searchService";

@Component({
  selector: 'app-voir-plus',
  templateUrl: './voir-plus.component.html',
  styleUrls: ['./voir-plus.component.css']
})
export class VoirPlusComponent implements OnInit {

  imageListe : ImageListeModel[] = [];
  currentIndex : number = 0;
  itemsPerPage : number = 6;

  filteredListe : ImageListeModel[] = [];
  searchTerm : string = '';

  get paginatedListe() {
    return this.imageListe.slice(this.currentIndex, this.currentIndex + this.itemsPerPage);
  }

  nextPage() {
    if (this.currentIndex < (this.imageListe.length - this.itemsPerPage)) {
      this.currentIndex += this.itemsPerPage;
    }
  }

  previousPage() {
    if (this.currentIndex > 0) {
      this.currentIndex -= this.itemsPerPage;
    }
  }

  constructor(public searchService: SearchService,private imageListeservice : ImageListeService){

    this.imageListe = this.imageListeservice.imageListe;
  }

  ngOnInit() {
    AOS.init();

    this.imageListe = this.imageListeservice.imageListe;
    this.filteredListe = this.imageListe;
  }

}

