import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-imgmodal',
  templateUrl: './imgmodal.component.html',
  styleUrls: ['./imgmodal.component.scss'],
})
export class ImgmodalComponent implements OnInit {
  
  
  sliderOpt = {
    zoom: {
      maxRatio: 2,
    },
  };
  rdata:object;
  constructor(private mdlctrl:ModalController,public navparam: NavParams) {
    this.rdata = this.navparam.get('rdata');
    console.log('modal : ',this.rdata);
   }

  ngOnInit() {}

  dismiss(){
    this.mdlctrl.dismiss({
      'dismissed': true
    });
  }

}
