import {Component, OnInit} from '@angular/core';
import {User} from "./model/user";
import {UserService} from "./service/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit{

  public users: User[] = [];

  constructor(private userService: UserService) { }

public getUser(): void {
  this.userService.getUser().subscribe((response: User[]) => {
    this.users = response;
    console.log(this.users);
  });
}

  ngOnInit(): void {
    this.getUser();
  }

  isEditable = false;
  diable = true;
  toogleEdit() {
    this.isEditable = !this.isEditable;
  }

  diableButton() {
    this.diable = !this.diable;
  }

}
