import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {ReservationManage} from "../model/reservationManage";

@Injectable({
  providedIn: 'root'
})
export class ReservationManageService {

  private reservationsSubject = new BehaviorSubject<ReservationManage[]>([]);
  reservations$ = this.reservationsSubject.asObservable();

  setReservations(reservations: ReservationManage[]) {
    this.reservationsSubject.next(reservations);
  }
  constructor(private http: HttpClient) {}

  public getReservation(): Observable<ReservationManage[]> {
    return this.http.get<any>('http://localhost:8080/api/reserve/listeReservation').pipe();
  }

  getReservationsByDestination(destination: string): Observable<ReservationManage[]> {
    return this.http.get<any>('http://localhost:8080/api/reserve/recherche/' + destination).pipe();
  }

  sendEmail(id: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/reserve/confirmerReservation/${id}`, {});
  }

}
