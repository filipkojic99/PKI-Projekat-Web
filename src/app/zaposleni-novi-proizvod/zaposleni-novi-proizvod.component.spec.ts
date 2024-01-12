import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaposleniNoviProizvodComponent } from './zaposleni-novi-proizvod.component';

describe('ZaposleniNoviProizvodComponent', () => {
  let component: ZaposleniNoviProizvodComponent;
  let fixture: ComponentFixture<ZaposleniNoviProizvodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaposleniNoviProizvodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZaposleniNoviProizvodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
