import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ReservationManage} from "../model/reservationManage";

@Injectable({
  providedIn: 'root'
})
export class ReservationManageService {
  constructor(private http: HttpClient) {}

  public getReservation(): Observable<ReservationManage[]> {
    return this.http.get<any>('http://localhost:8080/api/reserve/listeReservation').pipe();
  }
}
