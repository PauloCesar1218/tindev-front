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

  getDevelopers(id): Observable<any> {
    return this.http.get(`${SERVER_URL}${environment.API.main.get_developers}/${id}`, { headers: this.customHeader });
  }

  getConversations(dev): Observable<any> {
    return this.http.post(`${SERVER_URL}${environment.API.main.get_matches}`, dev, { headers: this.customHeader });
  }

  likeDeveloper(dev): Observable<any> {
    return this.http.post(`${SERVER_URL}${environment.API.main.like}`, dev, { headers: this.customHeader });
  }

  findMatches(dev): Observable<any> {
    return this.http.post(`${SERVER_URL}${environment.API.main.match}`, dev, { headers: this.customHeader });
  }
  
}
