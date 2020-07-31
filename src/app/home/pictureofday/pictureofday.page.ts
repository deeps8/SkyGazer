import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PicdayService } from '../../services/picday.service';

@Component({
  selector: 'app-pictureofday',
  templateUrl: './pictureofday.page.html',
  styleUrls: ['./pictureofday.page.scss'],
})

export class PictureofdayPage implements OnInit {

  data:any;
  d;
  load:Boolean=false;
  sliderOpt = {
    zoom: {
      maxRatio: 3,
    },
  };
  constructor( private picday: PicdayService,public sanitizer: DomSanitizer) {
      this.picday.getPicOfDay().subscribe(res=>{
      //console.log(res);
        this.data=res;
        this.d=res.date;
        this.load=true;
      });
   }

  ngOnInit() {

  }

  newData(event){
    var date = event.detail.value;
    date = date.split('T')[0];
    //console.log( date );

    this.load=false;
    this.picday.getPicOfPerDay(date).subscribe(res=>{
      //console.log(res);
        this.data=res;
        this.d=res.date;
        this.load=true;
    })

  }

}
