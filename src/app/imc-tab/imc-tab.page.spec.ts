import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImcTab } from './imc-tab.page';

describe('ImcTab', () => {
  let component: ImcTab;
  let fixture: ComponentFixture<ImcTab>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImcTab ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImcTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
