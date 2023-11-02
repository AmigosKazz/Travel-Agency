import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import * as AOS from 'aos';
import {HousingLocation} from "../housing-location";

@Component({
  selector: 'app-voir-plus',
  templateUrl: './voir-plus.component.html',
  styleUrls: ['./voir-plus.component.css']
})
export class VoirPlusComponent implements AfterViewInit,OnInit {

  ngOnInit() {
    AOS.init();
  }



    ngAfterViewInit(){

  }

}

