import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ReservationService} from "./service/reservationService";
import {getXHRResponse} from "rxjs/internal/ajax/getXHRResponse";
import {Router} from "@angular/router";
import {Destination} from "./model/reservation";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit{
  destinations = ['Ranomafana', 'Isalo', 'Andringitra',
    'Ankarafantsika', 'Tsingy de Bemaraha','Andringitra','Ankarana', 'Andasibe', 'Masoala', 'Makira'];

  selectedDestination: String | undefined;

  constructor(private reservationService : ReservationService, private route : Router ) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.reservationService.addReservation(form.value).subscribe(
        (response :any) => {
          console.log(response);
          if (response.status === 200) {
            this.route.navigate(['/']);
          }
        },
        (error : any) => {
          console.log(error);
        });
    }
  }


  ngOnInit() {
  }

}
