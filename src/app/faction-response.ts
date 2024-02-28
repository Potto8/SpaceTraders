import {Faction} from "./faction";

export class FactionResponse {
  constructor(){
    this.data = [];
    this.meta = { total: 0, page: 0, limit: 0 };
}
  data: Faction[];
  meta: {
    total: number;
    page: number;
    limit: number;
  };
}
