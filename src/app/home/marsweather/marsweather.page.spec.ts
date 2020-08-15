import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarsweatherPage } from './marsweather.page';

describe('MarsweatherPage', () => {
  let component: MarsweatherPage;
  let fixture: ComponentFixture<MarsweatherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarsweatherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarsweatherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
