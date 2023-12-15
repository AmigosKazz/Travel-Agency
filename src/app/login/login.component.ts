import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {LoginService} from "./service/login.service";
import {Router} from "@angular/router";

interface LoginResponse {
  role: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  roles = ['Agence de voyage','Visiteur'];
  role_utilisateur : string | undefined;

  constructor(private loginService: LoginService, private route: Router) {

  }

onSubmit(form: NgForm) {
  if (form.valid) {
    this.loginService.login(form.value).subscribe(
      (response: any) => {
        console.log(response);
        if (response.status === 200) {
          this.route.navigate(['/dashboard/user']);
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}

}
