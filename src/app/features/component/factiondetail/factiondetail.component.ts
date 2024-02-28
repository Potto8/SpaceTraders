import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-factiondetail',
  templateUrl: './factiondetail.component.html',
  styleUrls: ['./factiondetail.component.css']
})
export class FactiondetailComponent {

  constructor(private http:HttpClient) {  }

  onSubmit(){}
}
