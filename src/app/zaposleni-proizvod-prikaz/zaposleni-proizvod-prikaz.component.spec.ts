import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaposleniProizvodPrikazComponent } from './zaposleni-proizvod-prikaz.component';

describe('ZaposleniProizvodPrikazComponent', () => {
  let component: ZaposleniProizvodPrikazComponent;
  let fixture: ComponentFixture<ZaposleniProizvodPrikazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaposleniProizvodPrikazComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZaposleniProizvodPrikazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
