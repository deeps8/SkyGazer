import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoverService {
  
  /*
    Query parameters to pass
      1. Earht date.
      2. Camera (list of cameras are there)
      3. Page (1-25)
      4. api_key (given)
  */

  
  url:string="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?";
  apikey:string="a3YuWm7aHvSzsIhB9ZM6CA3RxNraZDtS3vPkz5oz";
  httpOptions;
  constructor( private http: HttpClient,
               private router: Router) {

                }
  
  getRoverImage(date,page){
    this.httpOptions={};
      //integrating date page.

      return <any>this.http.get(this.url +"earth_date="+date+"&page="+page+"&api_key="+this.apikey,this.httpOptions);
  }              

}
