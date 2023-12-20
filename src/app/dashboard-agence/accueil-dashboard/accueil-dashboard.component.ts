import {Component, ElementRef, OnInit} from '@angular/core';
import {Destination} from "./model/destination";
import {DestinationService} from "./service/destinationService";
import {NgForm} from "@angular/forms";
import { ViewChild } from '@angular/core';
import * as bootstrap from "bootstrap";

@Component({
  selector: 'app-accueil-dashboard',
  templateUrl: './accueil-dashboard.component.html',
  styleUrls: ['./accueil-dashboard.component.css']
})
export class AccueilDashboardComponent implements OnInit{

  @ViewChild('closebutton') exampleModal!: ElementRef;

  public destinations : Destination[] = [];
  public destination: Destination = {nom_destination: '', prix_destination: 0}; // Add this line

  showSuccessMessage= false;
  showErrorMessage= false;

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
        // show and hide alert after 1 seconds
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 1000);
        //reload after 1.6 seconds
        setTimeout(() => window.location.reload(), 1600);
      },
      (error) => {
        console.log(error);
        this.showErrorMessage = true;
        setTimeout(() => this.showErrorMessage = false, 1000);
      }
    );
  }

  //apeller ici la fonction de suppression
  deleteDestination(id_destination: number) {
    this.destinationService.deleteDestination(id_destination).subscribe(
      (response) => {
        console.log(response);
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 1000);
        // Reload this page after 1.5 seconds
        setTimeout(() => window.location.reload(), 1500);
      },
      (error) => {
        console.log(error);
        this.showErrorMessage = true;
        setTimeout(() => this.showErrorMessage = false, 1000);
      }
    );
  }

  //modification by id ici
  updateDestination(id_destination: number, form: NgForm) {
    const destination: Destination = {
      nom_destination: form.value.nom_destination,
      prix_destination: form.value.prix_destination
    };

    this.destinationService.updateDestination(id_destination, form.value).subscribe(
      (response) => {
        console.log(response);
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 1000);
        // Reload this page after 1.5 seconds
        setTimeout(() => window.location.reload(), 1500);
      },
      (error) => {
        console.log(error);
        this.showErrorMessage = true;
        setTimeout(() => this.showErrorMessage = false, 1000);
      }
    );
  }

  loadDestination(destination: Destination): void {
    this.destination = destination;
  }

  ngOnInit() {
    this.getDestination();

  }

  protected readonly NgForm = NgForm;
}
