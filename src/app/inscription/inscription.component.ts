import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {InscriptionService} from "./service/InscriptionService";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit{
  roles = ['Agence de voyage','Visiteur'];
  role_utilisateur: string | undefined;

  constructor(private inscriptionService: InscriptionService
              , private router: Router,
              private snakeBar: MatSnackBar) {}

onSubmit(form: NgForm) {
  this.inscriptionService.sentInscription(form.value).subscribe(
    (response) => {
      console.log(response);
      this.router.navigate(['/login']).then(r => console.log(r));
      this.snakeBar.open("Inscription réussi", "OK",
        {duration: 2000});
    },
    (error) => {
      console.log(error);
    }
  );
}

  ngOnInit() {

  }

  protected readonly NgForm = NgForm;
}
