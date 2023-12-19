import {Component, OnInit} from '@angular/core';
import {ReservationManage} from "./model/reservationManage";
import {ReservationManageService} from "./service/reservationManage.service";
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs";

@Component({
  selector: 'app-resevation-manager',
  templateUrl: './resevation-manager.component.html',
  styleUrls: ['./resevation-manager.component.css']
})
export class ResevationManagerComponent implements OnInit{

  public reservationManages: ReservationManage[] = [];

  constructor(private reservationManageService : ReservationManageService) {}

  public getReservation(): void {
    this.reservationManageService.getReservation().subscribe(
      (response: ReservationManage[]) => {
        this.reservationManages = response;
        console.log(this.reservationManages);
      });
  }

  ngOnInit(): void {
    this.getReservation();

    this.reservationManageService.reservations$.subscribe((reservations: ReservationManage[]) => {
      this.reservationManages = reservations;
    });
  }

}
