import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ReservationService} from "./service/reservationService";
import {Router} from "@angular/router";
import {Destination} from "./model/reservation";

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

  constructor(private reservationService : ReservationService, private route : Router ) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const formData = {...form.value};
      if (this.selectedDestination) {
        formData.destination = this.selectedDestination.nom_destination;
      }
      this.reservationService.addReservation(formData).subscribe(
        (response :any) => {
          console.log(response);
          if (response.status === 201) { // Check if the status code is 201
            this.route.navigate(['/']); // Navigate back to the root route
          }
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

