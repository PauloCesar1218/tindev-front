import { Injectable } from '@angular/core';
import { SERVER_URL } from 'src/environments/environment';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  customHeader = new HttpHeaders({
    'Api-Key': 'supersecrectkey'
  });
  constructor(private http: HttpClient) { }

  getDevelopers(): Observable<any> {
    return this.http.get(`${SERVER_URL}${environment.API.main.get_developers}`, { headers: this.customHeader });
  }

  getConversations(dev): Observable<any> {
    return this.http.post(`${SERVER_URL}${environment.API.main.get_matches}`, dev, { headers: this.customHeader });
  }
  
}
