import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private apiUrl = environment.apiBaseUrl;
  private transcribeAudioPath = 'api/ai/transcribe-audio';
  private generateTextPath = 'api/ai/generate-text';
  private problemSummariesPath = 'api/problems/summaries'
  private getOneProblemPath = 'api/problems'

  constructor(private http: HttpClient) { }

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
  
  generateTextPost(studentCodeData: string, problemChoice: number, transcribedAudio: string, promptPerson: string, promptDifficulty: number): Observable<any> {
    const endpoint = `${this.apiUrl}/${this.generateTextPath}`;
    const datetime = new Date().toISOString();
    const body = {
      datetime,
      studentCodeData,
      problemChoice,
      transcribedAudio,
      promptPerson,
      promptDifficulty
    };
    return this.http.post(endpoint, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
