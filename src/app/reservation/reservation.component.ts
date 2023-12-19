import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ReservationService} from "./service/reservationService";
import {Router} from "@angular/router";
import {Destination} from "./model/reservation";
import * as bootstrap from 'bootstrap';
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit{
  // destinations = ['Ranomafana', 'Isalo', 'Andringitra',
  //   'Ankarafantsika', 'Tsingy de Bemaraha','Andringitra','Ankarana',
  //   'Andasibe', 'Masoala', 'Makira'];

  destinations: Destination[] = [];
  selectedDestination: Destination = {id_destination: 0, nom_destination: ''};

  constructor(private reservationService : ReservationService, private route : Router, private snakeBar: MatSnackBar) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const formData = {...form.value};
      if (this.selectedDestination) {
        formData.destination = this.selectedDestination.nom_destination;
      }
      this.reservationService.addReservation(formData).subscribe(
        (response :any) => {
          console.log(response);
          this.route.navigate(['/']).then(r => console.log(r));
          this.snakeBar.open("Reservation réussi", "OK",
            {duration: 2000});
        },
        (error : any) => {
          console.log(error);
        });
    }
  }


  ngOnInit() {
    this.reservationService.getDestination().subscribe(
      (destinations: Destination[]) => {
        this.destinations = destinations;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}

