import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {InscriptionService} from "./service/InscriptionService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  roles = ['Agence de voyage','Visiteur'];

  constructor(private inscriptionService: InscriptionService, private router: Router) {

  }

  onSubmit(form: NgForm) {
    this.inscriptionService.sendInscription(form.value).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/login']).then(r => console.log(r));
      },
      (error) => {
        console.log(error);
      }
    );
  }

  protected readonly NgForm = NgForm;
}
