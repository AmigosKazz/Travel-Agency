import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Inscription} from "../inscription";


@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private http: HttpClient) {}

  public sentInscription( data :any ): Observable<Inscription[]> {
    return this.http.post<any>('http://localhost:8080/api/utilisateur/ajouterUtilisateur',
      data).pipe(
        catchError((error) => {
          console.log(error);
          return throwError(error);
        })
    );
  }
}
