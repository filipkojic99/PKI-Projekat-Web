import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaposleniNarudzbinaPrikazComponent } from './zaposleni-narudzbina-prikaz.component';

describe('ZaposleniNarudzbinaPrikazComponent', () => {
  let component: ZaposleniNarudzbinaPrikazComponent;
  let fixture: ComponentFixture<ZaposleniNarudzbinaPrikazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaposleniNarudzbinaPrikazComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZaposleniNarudzbinaPrikazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
