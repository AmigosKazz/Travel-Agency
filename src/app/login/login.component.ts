import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {LoginService} from "./service/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private router: any;
  roles = ['Agence de voyage','Visiteur'];

  constructor(private loginService: LoginService) {
    
  }
  
  onSubmit(form : NgForm) {
    if (form.valid) {
      this.loginService.login(form.value).subscribe(
          (response: any) => {
          console.log(response);
          this.router.navigate(['/']);
        },
          (error: any) => {
          console.log(error);
        }
      );
    }
  }
}