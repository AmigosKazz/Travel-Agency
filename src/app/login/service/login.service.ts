import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/api/utilisateur/login';

  constructor(private http: HttpClient, private router: Router) {}

  login(loginForm: any): Observable<any> {
    return this.http.post(this.apiUrl, loginForm, { observe: 'response' });
  }

}

