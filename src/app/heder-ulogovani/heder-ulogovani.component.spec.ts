import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HederUlogovaniComponent } from './heder-ulogovani.component';

describe('HederUlogovaniComponent', () => {
  let component: HederUlogovaniComponent;
  let fixture: ComponentFixture<HederUlogovaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HederUlogovaniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HederUlogovaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
