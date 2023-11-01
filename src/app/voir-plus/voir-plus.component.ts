import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-voir-plus',
  templateUrl: './voir-plus.component.html',
  styleUrls: ['./voir-plus.component.css']
})
export class VoirPlusComponent implements AfterViewInit,OnInit {

  ngOnInit() {
    AOS.init();
  }

  constructor(private el: ElementRef) {}
  ngAfterViewInit(){
    const videoElement:HTMLVideoElement = this.el.nativeElement.querySelector('video');
    videoElement.muted = true;
  }

}

