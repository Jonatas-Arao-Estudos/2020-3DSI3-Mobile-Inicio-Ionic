import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SomarTab } from './somar-tab.page';

describe('Tab1Page', () => {
  let component: SomarTab;
  let fixture: ComponentFixture<SomarTab>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SomarTab],
    }).compileComponents();

    fixture = TestBed.createComponent(SomarTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
