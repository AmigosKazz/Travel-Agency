import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  private apiUrl = 'http://localhost:8080/api/inscription'; //exemple

  constructor(private http: HttpClient) {
  }


  sendInscription(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

}
