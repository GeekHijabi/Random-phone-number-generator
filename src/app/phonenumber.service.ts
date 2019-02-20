import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PhonenumberService {

  constructor(private http: HttpClient) { }
  baseUrl = environment.baseUrl;
  

  generateRandomPhoneNumbers() {
    return this.http.get(`${this.baseUrl}/create-phonenumbers`);
  }

  getGeneratedPhoneNumbers() {
    return this.http.get(`${this.baseUrl}/get-phonenumbers`);
  }
}
