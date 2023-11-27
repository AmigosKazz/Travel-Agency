import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  roles = ['Agence de voyage','Visiteur'];

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
