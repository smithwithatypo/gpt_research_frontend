import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private PORT = 3000;
  private apiUrl = `http://localhost:${this.PORT}`; 
  private uploadJSONPath = 'api/text/upload-json';
  private transcribeAudioPath = 'api/ai/transcribe-audio';
  private uploadAudioPath = 'api/audio/upload-audio';
  private generateTextPath = 'api/ai/generate-text';
  private problemSummariesPath = 'api/problems/summaries'
  private getOneProblemPath = 'api/problems'   // TODO: make endpoint in BE

  constructor(private http: HttpClient) { }

  getProblemSummaries(): Observable<any> {
    const endpoint = `${this.apiUrl}/${this.problemSummariesPath}`;
    return this.http.get(endpoint);
  }

  getOneProblem(problemID: number): Observable<any> {  // TODO: NEEDS TESTING
    const endpoint = `${this.apiUrl}/${this.getOneProblemPath}/${problemID}`
    return this.http.get(endpoint)
  }

  uploadJSON(text: string): Observable<any> {
    const endpoint = `${this.apiUrl}/${this.uploadJSONPath}`;
    return this.http.post(endpoint, { text }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  sendAudio(audioBlob: Blob): Observable<any> {
    const endpoint = `${this.apiUrl}/${this.uploadAudioPath}`;
    const formData = new FormData();
    formData.append('audio', audioBlob, 'audio.webm');
    return this.http.post(endpoint, formData);
  }

  transcribeAudio(): Observable<any> {
    const endpoint = `${this.apiUrl}/${this.transcribeAudioPath}`;
    return this.http.get(endpoint);
  }

  generateText(): Observable<any> {
    const endpoint = `${this.apiUrl}/${this.generateTextPath}`;
    return this.http.get(endpoint);
  }
}
