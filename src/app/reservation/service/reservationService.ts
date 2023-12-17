import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Destination, Reservation} from "../model/reservation";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl = 'http://localhost:8080/api/reserve/ajouterReservation';

  constructor(private http: HttpClient) { }

  // add reservation
  public addReservation(reservation: Reservation): Observable<Reservation[]> {
    return this.http.post<any>('http://localhost:8080/api/reserve/ajouterReservation', reservation);
  }

  listeDestination() : Observable<Destination[]> {
    return this.http.get<any>('http://localhost:8080/api/destination/listeDestination').pipe();
  }

  public getDestination() : Observable<Destination[]> {
    return this.http.get<any>('http://localhost:8080/api/destination/listeDestination').pipe();
  }





}
