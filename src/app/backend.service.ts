import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private PORT = 3000;
  private apiUrl = `http://localhost:${this.PORT}`; // Replace with your actual API URL
  private PATH = 'api/ai/process-code';

  constructor(private http: HttpClient) { }

  sendText(text: string): Observable<any> {
    const endpoint = `${this.apiUrl}/${this.PATH}`;
    return this.http.post(endpoint, { text }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
