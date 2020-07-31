import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PictureofdayPage } from './pictureofday.page';

describe('PictureofdayPage', () => {
  let component: PictureofdayPage;
  let fixture: ComponentFixture<PictureofdayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureofdayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PictureofdayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
