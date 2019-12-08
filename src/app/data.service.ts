import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable()
export class DataService {

  constructor(private http:HttpClient) { }


  getNd(){
    return this.http.get('/assets/master.json');
  }

  getWj(id){
    return this.http.get('/assets/slave.json');
  }

  getLink(id){
    return this.http.get('/assets/link.json');
  }

}