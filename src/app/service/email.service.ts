import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private baseUrl:String="https://sarang5900.github.io/EmailSenderApp/"

  constructor(private http: HttpClient) { }

  sendEmail(data:any){
    return this.http.post(`${this.baseUrl}/sendEmail`, data)
  }
}
