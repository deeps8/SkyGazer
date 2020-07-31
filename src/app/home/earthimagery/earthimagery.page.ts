import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpicService } from 'src/app/services/epic.service';
import * as moment from 'moment';

@Component({
  selector: 'app-earthimagery',
  templateUrl: './earthimagery.page.html',
  styleUrls: ['./earthimagery.page.scss'],
})
export class EarthimageryPage implements OnInit {


  date;
  data:Boolean = false;
  fdate;
  category:String='natural';
  response=[];
  api='?api_key=a3YuWm7aHvSzsIhB9ZM6CA3RxNraZDtS3vPkz5oz';
  imgurl = 'https://api.nasa.gov/EPIC/archive/';

  // if autoValue is true no autoplay
  autoValue = true;

  fade : Object = {
    beforeInit() {
      const swiper = this;
      swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
      const overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true,
      };
      swiper.params = Object.assign(swiper.params, overwriteParams);
      swiper.params = Object.assign(swiper.originalParams, overwriteParams);
    },
    setTranslate() {
      const swiper = this;
      const { slides } = swiper;
      for (let i = 0; i < slides.length; i += 1) {
        const $slideEl = swiper.slides.eq(i);
        const offset$$1 = $slideEl[0].swiperSlideOffset;
        let tx = -offset$$1;
        if (!swiper.params.virtualTranslate) tx -= swiper.translate;
        let ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
        }
        const slideOpacity = swiper.params.fadeEffect.crossFade
          ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
          : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
        $slideEl
          .css({
            opacity: slideOpacity,
          })
          .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
      }
    },
    setTransition(duration) {
      const swiper = this;
      const { slides, $wrapperEl } = swiper;
      slides.transition(duration);
      if (swiper.params.virtualTranslate && duration !== 0) {
        let eventTriggered = false;
        slides.transitionEnd(() => {
          if (eventTriggered) return;
          if (!swiper || swiper.destroyed) return;
          eventTriggered = true;
          swiper.animating = false;
          const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
          for (let i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    },
  };

  sliderOpt={
    slidesPerView: 1,
    autoplay: false,
    zoom:{
      maxRatio: 2
    }
  };

  sliderOpt1={
    slidesPerView: 1,
    autoplay: {
      delay:200
    },
    loop:true,
    speed:200,
    on:this.fade
  };

  constructor( private route : ActivatedRoute, private epic:EpicService ) {
      
   }

  ngOnInit() {
    this.data = false;
    this.date = moment().format("MM-DD-YYYY");
      this.epic.getLatestImage(this.category).subscribe(res=>{
        if(res){
          this.data = true;
          this.fdate = this.date=res[0].date.split(" ")[0];
          //console.log(this.date);
          this.response = res;
          console.log(this.response);
          
          const regex = /-/gi;
          this.fdate = this.fdate.replace(regex,'/');
          }
      });
  }

  getimg(imgname:String){
      imgname = imgname+'.png';
      
      return  (this.imgurl + this.category + '/' + this.fdate + '/png/' + imgname + this.api);
      //console.log(this.fdate);
  }

  autoPlay(){
    this.autoValue = !this.autoValue;
  }


  stopPlay(){
    this.autoValue = true;
    
  }

  getCategory(c,d){
    this.data= false;
    this.category = c.value;
    this.date = d.value;

    this.epic.getEarthImage(this.category,this.date).subscribe(res=>{
      this.data=true;
      
      if(res){

        if(res.length != 0){

          this.response = res;
          console.log(this.response);
      
          this.fdate = this.date=res[0].date.split(" ")[0];
          const regex = /-/gi;
          this.fdate = this.fdate.replace(regex,'/');
        }
        else{
          this.response = [];
          console.log("going oninit");
          this.ngOnInit();
        }
        
        }
    });
  }

}
