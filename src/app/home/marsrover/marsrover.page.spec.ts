import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarsroverPage } from './marsrover.page';

describe('MarsroverPage', () => {
  let component: MarsroverPage;
  let fixture: ComponentFixture<MarsroverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarsroverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarsroverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
