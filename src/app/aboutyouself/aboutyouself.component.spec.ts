import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutyouselfComponent } from './aboutyouself.component';

describe('AboutyouselfComponent', () => {
  let component: AboutyouselfComponent;
  let fixture: ComponentFixture<AboutyouselfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutyouselfComponent]
    });
    fixture = TestBed.createComponent(AboutyouselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
