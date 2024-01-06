import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeniKupacComponent } from './meni-kupac.component';

describe('MeniKupacComponent', () => {
  let component: MeniKupacComponent;
  let fixture: ComponentFixture<MeniKupacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeniKupacComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeniKupacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
