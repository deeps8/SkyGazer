import { Component, OnInit , ViewChild } from '@angular/core';
import { RoverService } from 'src/app/services/rover.service';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { DatePipe } from '@angular/common';
import { ImgmodalComponent } from 'src/app/components/imgmodal/imgmodal.component';

@Component({
  selector: 'app-marsrover',
  templateUrl: './marsrover.page.html',
  styleUrls: ['./marsrover.page.scss'],
})
export class MarsroverPage implements OnInit {

  response:Array<any>;
  finished:boolean =  false;
  page=1;
  date;
  load:boolean=false;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(private rover:RoverService, public datepipe: DatePipe, private modalctrl: ModalController) {
    
    this.date = new Date();
    this.date.setDate(this.date.getDate()-2);
    this.date=this.datepipe.transform(this.date,'yyyy-MM-dd');
   }

  ngOnInit() {
    this.rover.getRoverImage(this.date,this.page).subscribe(res=>{
      this.response = res.photos;
      console.log(this.date);
      this.load = true;
    });

    this.page++;
  }

  loadData(ev){
    this.load = false;
    setTimeout(() => {
      this.rover.getRoverImage(this.date,this.page).subscribe(res=>{
        if(res.photos.length == 0){
          this.finished = true;
          console.log('Finished' , this.finished);
          return;
        }
        let newres:Array<any> = res.photos;
        this.response = this.response.concat(newres);
        console.log(this.response);
        
        this.page++;
      });
      
      ev.target.complete();
      
      // if(this.finished){
      //   ev.target.disable = true;
      // }

    }, 500);
    this.load = true;    
    
  }

  newData(ev){
    this.load = false;
    this.page=0;
    this.date = ev.detail.value;
    this.rover.getRoverImage(this.date, this.page).subscribe(res=>{
      this.response = res.photos;
      console.log(this.response);
    });

    this.page++;
    this.load = true;
  }

  async presentModal(imgurl,item) {
    console.log('main : ',item);

    const modal = await this.modalctrl.create({
      component: ImgmodalComponent,
      cssClass: 'img-modal',
      componentProps: {
        rdata: item
      },
      swipeToClose: true,
      presentingElement: await this.modalctrl.getTop()
    });
    return await modal.present();
  }

  

}
