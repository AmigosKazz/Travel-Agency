import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements AfterViewInit{

  private sidebar : HTMLElement = <HTMLElement> document.querySelector(".sidebar");
  private closeBtn : HTMLElement = <HTMLElement> document.querySelector("#btn");
  private searchBtn: HTMLElement = <HTMLElement> document.querySelector(".bx-search");

  ngAfterViewInit(): void {
    this.closeBtn.addEventListener("click", ()=>{
      this.sidebar.classList.toggle("open");
      this.menuBtnChange();
    });

    this.searchBtn.addEventListener("click", ()=>{
      this.sidebar.classList.toggle("open");
      this.menuBtnChange();
    })
  }

  private menuBtnChange() {
    if(this.sidebar.classList.toggle("open")){
      this.closeBtn.classList.replace("bx-menu","btn-menu-alt-right");
    } else {
      this.closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  }
}
