import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PicdayService {

  url='https://api.nasa.gov/planetary/apod?api_key=a3YuWm7aHvSzsIhB9ZM6CA3RxNraZDtS3vPkz5oz';  
  httpOptions;
  constructor( private http: HttpClient,
               private router: Router) { 

  }

  getPicOfDay(){
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return <any>this.http.get(this.url,this.httpOptions);
  }

  getPicOfPerDay(datevalue){
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    let params = new HttpParams().set('date',datevalue );

    return <any>this.http.get(this.url,{params});
  }


}
