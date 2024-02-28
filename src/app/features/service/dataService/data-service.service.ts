import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ApiUrlService} from "../api-url.service";
import {UrlJson} from "../../../url-json";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private apiUrl = 'https://api.spacetraders.io/v2/factions/';
  private urlJson=new UrlJson();
  constructor(private http: HttpClient, private url:ApiUrlService) { }

/*  getUrl() {
    this.urlJson= this.url.getUrl();
     }*/


  getFactions()  {
   return this.http.get<any>(this.apiUrl);
  }
}
