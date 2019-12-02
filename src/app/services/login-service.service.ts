import { Injectable } from '@angular/core';
import { SERVER_URL } from 'src/environments/environment';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  customHeader = new HttpHeaders({
    'Api-Key': 'supersecrectkey'
  });
  constructor(private http: HttpClient) { }

  login(user): Observable<any> {
    return this.http.post(`${SERVER_URL}${environment.API.login}`, user, { headers: this.customHeader });
  }
  
}
