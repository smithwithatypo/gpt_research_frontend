import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientData } from '../models/clientData';


@Injectable({
  providedIn: 'root'
})

export class BackendService {
  private apiUrl = environment.apiBaseUrl;
  private getPromptOptionsPath = 'api/promptOptions/all';
  private problemSummariesPath = 'api/problems/summaries'
  private getOneProblemPath = 'api/problems'
  private transcribeAudioPath = 'api/ai/transcribe-audio';
  private generateTextPath = 'api/ai/generate-text';

  constructor(private http: HttpClient) { }

  getPromptOptions(): Observable<any> {
    const endpoint = `${this.apiUrl}/${this.getPromptOptionsPath}`
    return this.http.get(endpoint);
  }

  getProblemSummaries(): Observable<any> {
    const endpoint = `${this.apiUrl}/${this.problemSummariesPath}`;
    return this.http.get(endpoint);
  }

  getOneProblem(problemID: number): Observable<any> { 
    const endpoint = `${this.apiUrl}/${this.getOneProblemPath}/${problemID}`
    return this.http.get(endpoint)
  }

  transcribeAudio(audioBlob: Blob): Observable<any> {
    const endpoint = `${this.apiUrl}/${this.transcribeAudioPath}`;
    const formData = new FormData();
    formData.append('audio', audioBlob, 'audio.webm');
    return this.http.post(endpoint, formData);
  }
  
  generateTextPost(clientData: ClientData): Observable<any> {
    const endpoint = `${this.apiUrl}/${this.generateTextPath}`;
    return this.http.post(endpoint, clientData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true // Required for CORS
    });
  }
}
