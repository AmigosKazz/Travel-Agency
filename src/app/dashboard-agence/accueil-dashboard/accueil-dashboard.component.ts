import {Component, OnInit} from '@angular/core';
import {Destination} from "./model/destination";
import {DestinationService} from "./service/destinationService";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-accueil-dashboard',
  templateUrl: './accueil-dashboard.component.html',
  styleUrls: ['./accueil-dashboard.component.css']
})
export class AccueilDashboardComponent implements OnInit{
  public destinations : Destination[] = [];
  public destination: Destination = {nom_destination: '', prix_destination: 0}; // Add this line


  constructor(private destinationService : DestinationService) {}

  public getDestination(): void {
    this.destinationService.getDestination().subscribe(
      (response : Destination[]) => {
        this.destinations = response;
        console.log(this.destinations);
      }
    );
  }

  onSubmit(form: NgForm) {
    const destination: Destination = {
      nom_destination: form.value.nom_destination,
      prix_destination: form.value.prix_destination
    };

    this.destinationService.addDestination(form.value).subscribe(
      (response) => {
        console.log(response);
        // Reload this page
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getDestination();
  }

  protected readonly NgForm = NgForm;
}
