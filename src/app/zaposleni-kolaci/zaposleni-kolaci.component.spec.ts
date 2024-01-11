import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaposleniKolaciComponent } from './zaposleni-kolaci.component';

describe('ZaposleniKolaciComponent', () => {
  let component: ZaposleniKolaciComponent;
  let fixture: ComponentFixture<ZaposleniKolaciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaposleniKolaciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZaposleniKolaciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
