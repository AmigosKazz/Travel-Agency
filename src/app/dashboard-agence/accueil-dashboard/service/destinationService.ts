import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Destination} from "../model/destination";

@Injectable({
  providedIn: "root"
})
export class DestinationService{

  constructor(private http: HttpClient) {
  }

  public getDestination() : Observable<Destination[]> {
    return this.http.get<any>('http://localhost:8080/api/destination/listeDestination').pipe();
  }

  public addDestination(destination: Destination) : Observable<Destination[]> {
    return this.http.post<any>('http://localhost:8080/api/destination/ajouterDestination', destination);
  }

  public deleteDestination(id_destination: number) : Observable<Destination[]> {
    return this.http.delete<any>('http://localhost:8080/api/destination/supprimerDestination/' + id_destination);
  }

  //modification by id
  public updateDestination(id_destination: number, destination: Destination) : Observable<Destination[]> {
    return this.http.put<any>('http://localhost:8080/api/destination/modifierDestination/' + id_destination, destination);
  }

}
