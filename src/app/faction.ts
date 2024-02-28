import {Trait} from "./trait";

export class Faction {

  constructor(){
    this.symbol='';
    this.name='';
    this.description='';
    this.headquarters='';
    this.traits=[];
    this.isRecruiting=true;
  }
  symbol: string;
  name: string;
  description: string;
  headquarters: string;
  traits: Trait[];
  isRecruiting: boolean;
}
