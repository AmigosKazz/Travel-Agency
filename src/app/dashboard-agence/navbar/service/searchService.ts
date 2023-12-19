import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ReservationManageService } from '../../resevation-manager/service/reservationManage.service';
import { ReservationManage } from '../../resevation-manager/model/reservationManage';
import { iif, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchControl = new FormControl();

  constructor(private reservationManageService: ReservationManageService) {
    this.searchControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(value =>
        iif(() => value === '',
            this.reservationManageService.getReservation(),
            this.reservationManageService.getReservationsByDestination(value))
      )
    ).subscribe((response: ReservationManage[]) => {
      this.reservationManageService.setReservations(response);
    });
  }
}
