import {Injectable} from "@angular/core";
import {environment} from "../../../../environment/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor( private http: HttpClient) {}
  public getUser() : Observable<User[]> {
    return this.http.get<any>('http://localhost:8080/api/utilisateur/listUtilisateur').pipe();
  }
}
