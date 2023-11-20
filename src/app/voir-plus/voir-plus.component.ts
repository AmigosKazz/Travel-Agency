import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import * as AOS from 'aos';
import {ImageListeModel} from "./models/imageListe.model";
import {ImageListeService} from "./service/imageListe.service";

@Component({
  selector: 'app-voir-plus',
  templateUrl: './voir-plus.component.html',
  styleUrls: ['./voir-plus.component.css']
})
export class VoirPlusComponent implements OnInit {

  imageListe : ImageListeModel[] = [];

  constructor(private imageListeservice : ImageListeService){
    this.imageListe = this.imageListeservice.imageListe;
  }

  ngOnInit() {
    AOS.init();

    this.imageListe = this.imageListeservice.imageListe;
  }

}

