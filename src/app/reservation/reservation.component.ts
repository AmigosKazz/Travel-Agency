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

  showSuccessMessage = false;
  showErrorMessage = false;

  constructor(private reservationService : ReservationService, private route : Router, private snakeBar: MatSnackBar) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const formData = {...form.value};
      if (this.selectedDestination) {
        formData.destination = this.selectedDestination.nom_destination;
      }

      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 2000); // hide the alert after 2 seconds

      this.reservationService.addReservation(formData).subscribe(
        (response :any) => {
          console.log(response);
          //reload the page after 1.5 seconds
          setTimeout(() => window.location.reload(), 1500);
        },
        (error : any) => {
          console.log(error);
          this.showErrorMessage = true;
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

