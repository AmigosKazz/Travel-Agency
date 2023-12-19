import {Component, OnInit} from '@angular/core';
import {ReservationManage} from "./model/reservationManage";
import {ReservationManageService} from "./service/reservationManage.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-resevation-manager',
  templateUrl: './resevation-manager.component.html',
  styleUrls: ['./resevation-manager.component.css']
})
export class ResevationManagerComponent implements OnInit{

  public reservationManages: ReservationManage[] = [];
  public reservation: ReservationManage | undefined;

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
