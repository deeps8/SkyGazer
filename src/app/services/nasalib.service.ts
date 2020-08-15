import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NasalibService {

  url:string="https://images-api.nasa.gov/search?";
  httpOptions;
  constructor( private http: HttpClient,
               private router: Router) {

                }

  getNASAlib(q:string,media:string,year:string,page){
    this.httpOptions={};
    var queries="q="+q;
    console.log("q",queries);  

    if(media){
      if(media!=='all'){
        queries += "&media_type="+media;
        console.log("q",queries ,year);  
      
      }
    }


    if(year!==""){
      queries += "&year_start="+year;  
    console.log("q",queries);  
    }

    // else if(keyword !=="")
    //   queries += "&keywords+"+keyword; 

    queries +="&page="+page;
    console.log(this.url+queries);  

    return <any>this.http.get(this.url+queries,this.httpOptions);
  }
  
  getAllMedia(collectionurl){
    this.httpOptions = {};

    return <any>this.http.get(collectionurl,this.httpOptions);
  }
}
