import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PesoIdealTab } from './peso-ideal-tab.page';

describe('PesoIdealTab', () => {
  let component: PesoIdealTab;
  let fixture: ComponentFixture<PesoIdealTab>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesoIdealTab ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PesoIdealTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
