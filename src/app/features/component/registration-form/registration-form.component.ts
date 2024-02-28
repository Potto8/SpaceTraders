import {Component, OnInit} from '@angular/core';
import {DataServiceService} from "../../service/dataService/data-service.service";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {RegistrationService} from "../../service/registration/registration.service";
import {FactionResponse} from "../../../faction-response";
import {Faction} from "../../../faction";
import {Trait} from "../../../trait";

@Component({
    selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  factionResponse= new FactionResponse();
  symbols: string[] = [];
  selectedSymbol?: string | null;
  name= new FormControl('', [Validators.required]);
  faction= new FormControl('', [Validators.required]);
  nameSub?=this.name.value;
  factionSub?=this.faction.value;
  factions: Faction[] = [];
  traits: Trait[] = [];
  isRecruiting: boolean=false;
  constructor(private fb:FormBuilder, private dataService: DataServiceService, private registrationService: RegistrationService) {
/*    this.dataService.getFactions().subscribe((data: any) => {

      console.log(this.factionResponse);
    });*/
  }

  ngOnInit() {
    this.dataService.getFactions().subscribe((data: any) => {
      /*this.symbols = data.data.map((faction: any) => faction.symbol);*/
      this.factionResponse={...data};
      this.symbols = this.factionResponse.data.map(faction => faction.symbol);
      console.log(this.factionResponse);
    });

  }

  onSubmit() {
    console.log("pippo");
    console.log(this.nameSub);
    console.log(this.factionSub);
    if(this.nameSub && this.factionSub){
      console.log('Name: ' + this.nameSub);
      console.log('Faction: ' + this.factionSub);
      this.registrationService.registerUser(this.nameSub, this.factionSub).subscribe((data: any) => {
        console.log(data);
    });
    }
  }

  onSelectedFaction(){
    let isRecruiting = false;
    this.selectedSymbol = this.faction.value;
    this.factions= this.factionResponse.data.filter(faction => faction.symbol === this.selectedSymbol);
    this.traits = this.factions[0].traits;
    this.isRecruiting = this.factions[0].isRecruiting;
  }
}
