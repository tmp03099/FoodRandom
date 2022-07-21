import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  SERVER_URL: string = "http://127.0.0.1:8000";
  constructor(private httpClient: HttpClient) { }

  public uploadFile(data:any) {
    let uploadURL = `${this.SERVER_URL}/upload.php`;

    return this.httpClient.post<any>(uploadURL, data);
  }
}