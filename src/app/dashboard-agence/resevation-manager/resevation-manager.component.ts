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


  sendEmail(id: number): void {
    this.reservationManageService.sendEmail(id).subscribe(response => {
      console.log(response);
      this.emailSent = true;
      setTimeout(() => this.emailSent = false, 2000); // hide the alert after 2 seconds
      //close the modal
      document.getElementById('confirmEmailModal')?.click();
    });
  }

  deleteReservation(id: number): void {
    this.reservationManageService.deleteReservation(id).subscribe(response => {
      console.log(response);
      //hide the modal
      document.getElementById('deleteConfirmationModal')?.click();
      window.location.reload();
    });
  }

  ngOnInit(): void {
    this.getReservation();

    this.reservationManageService.reservations$.subscribe((reservations: ReservationManage[]) => {
      this.reservationManages = reservations;
    });
  }

}
