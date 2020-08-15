import { Component, OnInit, ViewChild } from '@angular/core';
import { NasalibService } from 'src/app/services/nasalib.service';
import * as moment from 'moment'; 
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { LibmodalComponent } from 'src/app/components/libmodal/libmodal.component';

@Component({
  selector: 'app-nasagallery',
  templateUrl: './nasagallery.page.html',
  styleUrls: ['./nasagallery.page.scss'],
})
export class NasagalleryPage implements OnInit {

  url:string="https://images-api.nasa.gov/search?";
  q:string="NASA";
  page=1;
  media:string="all";
  year:string;
  load:boolean=false;
  finished:boolean=false;
  //keyword="";
  data:Array<any>;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(private nasalib: NasalibService, private modalctrl: ModalController) {
    var now = moment().format('YYYY');
    this.year = now;
   }

  ngOnInit() {
    //keywords at hold.
    this.nasalib.getNASAlib(this.q,this.media,this.year,this.page).subscribe(res=>{
        if(res.collection.items.length !=0){
          this.data = res.collection.items;
          this.load=true;
          this.page++;
        }
        console.log(this.data);

    });


  }

  timefun(crdate){
    var now = moment();
    var dif = now.diff(crdate,'days');
    return moment.duration(dif,'days').humanize();

  }

  searchLib(){
    this.load = false;
    console.log("Search : ",this.q);
    console.log("Media : ",this.media);
    console.log("Year : ",this.year);
    
    this.page = 1;
    this.nasalib.getNASAlib(this.q,this.media,this.year,this.page).subscribe(res=>{
      if(res.collection.items.length !=0){
        this.data = res.collection.items;
        this.load=true;
        this.page++;
      }//console.log(this.data);
    })
  }


  loadData(ev){
    this.load = false;
    setTimeout(() => {
      this.nasalib.getNASAlib(this.q,this.media,this.year,this.page).subscribe(res=>{
        if(res.collection.items.length !=0){
          
        let newres:Array<any> = res.collection.items;
        this.data = this.data.concat(newres);
        console.log(this.data);
        
        this.page++;
        }else{
            this.finished = true;
            console.log('Finished' , this.finished);
            return;
        }
      });
      
      ev.target.complete();
      
      // if(this.finished){
      //   ev.target.disable = true;
      // }

    }, 500);
    this.load = true;    
    
  }

  changeM(ev){
    this.media = ev.target.value;
    this.searchLib();
  }

  changeMY(m,y){
    this.media = m.value;
    this.year = y.value.split('-')[0];console.log("Year : ",this.year);
    this.searchLib();
  }

  async presentModal(item) {
    //console.log('main : ',item);

    const modal = await this.modalctrl.create({
      component: LibmodalComponent,
      cssClass: 'img-modal',
      componentProps: {
        data: item
      },
      swipeToClose: true,
      presentingElement: await this.modalctrl.getTop()
    });
    return await modal.present();
  }

}
