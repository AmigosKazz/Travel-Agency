import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  destinations = ['Ranomafana', 'Isalo', 'Andringitra',
    'Ankarafantsika', 'Tsingy de Bemaraha','Andringitra','Ankarana'];

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

}
