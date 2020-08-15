import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import * as moment from 'moment'; 
import { NasalibService } from 'src/app/services/nasalib.service';

@Component({
  selector: 'app-libmodal',
  templateUrl: './libmodal.component.html',
  styleUrls: ['./libmodal.component.scss'],
})
export class LibmodalComponent implements OnInit {

  sliderOpt = {
    zoom: {
      maxRatio: 2,
    },
  };
  libdata;
  mediaCollection:Array<any>;
  vclick:boolean=false;
  aclick:boolean=false;

  constructor(public navparam: NavParams, private mdlctrl: ModalController,private nasalib: NasalibService) { 
    this.libdata = this.navparam.get('data');
    console.log('modal : ',this.libdata);

  }

  ngOnInit() {
    this.nasalib.getAllMedia(this.libdata.href).subscribe(res=>{
      if(res.length!==0){
        this.mediaCollection = res;
        console.log("media : ",this.mediaCollection);
      }
    })
  }

  dismiss(){
    this.mdlctrl.dismiss({
      'dismissed': true
    });
  }

  timefun(crdate){
    var now = moment();
    var dif = now.diff(crdate,'days');
    return moment.duration(dif,'days').humanize();

  }

  videoClick(){
      this.vclick = true;
  }
}
