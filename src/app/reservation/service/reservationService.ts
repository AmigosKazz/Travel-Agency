import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Destination} from "../model/reservation";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl = 'http://localhost:8080/api/reservation/addReservation';

  constructor(private http: HttpClient) { }

  addReservation(reservationForm: any): Observable<any> {
    return this.http.post(this.apiUrl, reservationForm, { observe: 'response' });
  }

  listeDestination() : Observable<Destination[]> {
    return this.http.get<any>('http://localhost:8080/api/destination/listeDestination').pipe();
  }

}
