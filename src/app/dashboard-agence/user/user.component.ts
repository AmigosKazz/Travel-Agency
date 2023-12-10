import { Component } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {

  showForm = false;

  toogleForm() {
    this.showForm = !this.showForm;
  }
}
