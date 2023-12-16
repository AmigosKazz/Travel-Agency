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
    this.destinationService.addDestination(form.value).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getDestination();
  }

  protected readonly onsubmit = onsubmit;
}
