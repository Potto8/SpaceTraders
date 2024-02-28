import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private registrationUrl = 'https://api.spacetraders.io/v2/register';
  constructor(private http: HttpClient) { }

  registerUser(name:String, faction:string): Observable<any> {
    let payload={
      symbol: name,
      faction: faction
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.registrationUrl, payload, {headers});
  }
}
