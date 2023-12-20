import {Component, OnInit} from '@angular/core';
import {ReservationManage} from "./model/reservationManage";
import {ReservationManageService} from "./service/reservationManage.service";
import {FormControl} from "@angular/forms";
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-resevation-manager',
  templateUrl: './resevation-manager.component.html',
  styleUrls: ['./resevation-manager.component.css']
})
export class ResevationManagerComponent implements OnInit{

  public reservationManages: ReservationManage[] = [];
  public reservation: ReservationManage | undefined;
  emailSent = false;
  emailError = false;
  showSuccessMessageDelete = false;
  showErrorMessageDelete = false;

  constructor(private reservationManageService : ReservationManageService) {}



  openModal(reservation: ReservationManage): void {
    this.reservation = reservation;
    // code to open the modal goes here
  }

  public getReservation(): void {
    this.reservationManageService.getReservation().subscribe(
      (response: ReservationManage[]) => {
        this.reservationManages = response;
        console.log(this.reservationManages);
      });
  }


async sendEmail(id: number): Promise<void> {
  try {
    const response = await this.reservationManageService.sendEmail(id).toPromise();
    console.log(response);
    this.emailSent = true;
    setTimeout(() => this.emailSent = false, 1000); // hide the alert after 1 seconds
    //close the modal
    document.getElementById('confirmEmailModal')?.click();
  } catch (error) {
    console.error('An error occurred:', error);
    this.emailError = true;
    setTimeout(() => this.emailError = false, 1000); // hide the alert after 1 seconds
  }
}

async deleteReservation(id: number): Promise<void> {
  try {
    const response = await this.reservationManageService.deleteReservation(id).toPromise();
    console.log(response);
    this.showSuccessMessageDelete = true;
    setTimeout(() => this.showSuccessMessageDelete = false, 1000); // hide the alert after 1 seconds
    // reload page after 1.5 second
    setTimeout(() => window.location.reload(), 1500);
  } catch (error) {
    console.error('An error occurred:', error);
    this.showErrorMessageDelete = true;
    setTimeout(() => this.showErrorMessageDelete = false, 1000); // hide the alert after 1 seconds
  }
}

  ngOnInit(): void {
    this.getReservation();

    this.reservationManageService.reservations$.subscribe((reservations: ReservationManage[]) => {
      this.reservationManages = reservations;
    });
  }

}
