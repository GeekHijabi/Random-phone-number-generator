import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhonenumberService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:3000/api/v1';

  generateRandomPhoneNumbers() {
    return this.http.get(`${this.baseUrl}/create-phonenumbers`);
  }

  getGeneratedPhoneNumbers() {
    return this.http.get(`${this.baseUrl}/get-phonenumbers`);
  }
}
