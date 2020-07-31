import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EpicService {

  url='https://api.nasa.gov/EPIC/api/';
  api='?api_key=a3YuWm7aHvSzsIhB9ZM6CA3RxNraZDtS3vPkz5oz';
  imgurl = 'https://api.nasa.gov/EPIC/archive/';

  httpOptions;
  constructor(  private http: HttpClient,
                private router: Router) { }

  
  getEarthImage(category,date){
    this.httpOptions = {
    };

    var tempurl= this.url + category + '/date/'+ date + this.api; 
    console.log(tempurl);
    return <any>this.http.get(tempurl,this.httpOptions);
  }

  getLatestImage(category){
    this.httpOptions = {
    };

    var tempurl= this.url + category  + this.api; 
    console.log(tempurl);
    return <any>this.http.get(tempurl,this.httpOptions);
  }

  getImageByURL(category,date,imgname){
    this.httpOptions = {
    };

    this.imgurl= this.imgurl + category + '/' + date + '/png/' + imgname + this.api; 
    console.log(this.imgurl);
    return <any>this.http.get(this.url,this.httpOptions);
  }
                
}
