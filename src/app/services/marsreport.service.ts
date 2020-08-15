import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MarsreportService {

  marsurl="https://api.nasa.gov/insight_weather/?api_key=a3YuWm7aHvSzsIhB9ZM6CA3RxNraZDtS3vPkz5oz&feedtype=json&ver=1.0";
  
  httpOptions;
  constructor(  private http: HttpClient,
                private router: Router) {

                 }

  getMarsWeather(){
    this.httpOptions={};

    return <any>this.http.get(this.marsurl,this.httpOptions);
  }
}
