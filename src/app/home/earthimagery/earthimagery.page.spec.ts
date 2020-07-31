import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EarthimageryPage } from './earthimagery.page';

describe('EarthimageryPage', () => {
  let component: EarthimageryPage;
  let fixture: ComponentFixture<EarthimageryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarthimageryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EarthimageryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
