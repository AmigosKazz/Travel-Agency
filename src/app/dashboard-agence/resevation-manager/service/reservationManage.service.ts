import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReservationManageService {
  constructor(private http: HttpClient) {}

  public getReservation() {
    return this.http.get('http://localhost:8080/reservation').pipe();
  }

}
