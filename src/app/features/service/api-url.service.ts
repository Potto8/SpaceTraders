import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {

  urlPath = "http://localhost:8080/src/assets/config.json";
  constructor(private http:HttpClient) {

  }

  getUrl(){
    return this.http.get(this.urlPath);
  }
}
