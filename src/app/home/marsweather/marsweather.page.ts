import { Component, OnInit } from '@angular/core';
import { MarsreportService } from 'src/app/services/marsreport.service';

@Component({
  selector: 'app-marsweather',
  templateUrl: './marsweather.page.html',
  styleUrls: ['./marsweather.page.scss'],
})
export class MarsweatherPage implements OnInit {

  data:Boolean = false;
  solKeys;
  response;
  segment='temp';
  constructor(private marsweather: MarsreportService) { }

  ngOnInit() {
    this.marsweather.getMarsWeather().subscribe(res=>{
      if(res.length != 0){
          
        //storing Sol_keys
        this.solKeys = res.sol_keys;
        
        //storing response
        this.response = res;
        
        this.data = true;
        //console.log(this.response[594]);

      }
    });
  }
  segmentChanged(ev: any) {

  }

  tempChange(ev: any){
    if(ev.detail.value=='f'){
      this.solKeys.forEach(sol => {
          this.response[sol].AT.mx = ( this.response[sol].AT.mx * 9/5 ) + 32;
          this.response[sol].AT.mn = ( this.response[sol].AT.mn * 9/5 ) + 32;
      });
    }else{
      this.solKeys.forEach(sol => {
        this.response[sol].AT.mx = ( this.response[sol].AT.mx - 32) * 5/9 ;
        this.response[sol].AT.mn = ( this.response[sol].AT.mn - 32) * 5/9 ;
    });
    }
  }
  
  windChange(ev: any){
    if(ev.detail.value=='mph'){
      this.solKeys.forEach(sol => {
          this.response[sol].HWS.mx = ( this.response[sol].HWS.mx * 2.237);
          this.response[sol].HWS.mn = ( this.response[sol].HWS.mn * 2.237);
      });
    }else{
      this.solKeys.forEach(sol => {
        this.response[sol].HWS.mx = ( this.response[sol].HWS.mx / 2.237) ;
        this.response[sol].HWS.mn = ( this.response[sol].HWS.mn / 2.237);
    });
    }
  }

}
