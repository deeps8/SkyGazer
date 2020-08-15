import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NasagalleryPage } from './nasagallery.page';

describe('NasagalleryPage', () => {
  let component: NasagalleryPage;
  let fixture: ComponentFixture<NasagalleryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NasagalleryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NasagalleryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
