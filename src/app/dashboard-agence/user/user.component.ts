import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  isEditable = false;
  diable = true;
  toogleEdit() {
    this.isEditable = !this.isEditable;
  }

  diableButton() {
    this.diable = !this.diable;
  }

}
