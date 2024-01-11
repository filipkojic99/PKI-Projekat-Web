import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaposleniPromocijaComponent } from './zaposleni-promocija.component';

describe('ZaposleniPromocijaComponent', () => {
  let component: ZaposleniPromocijaComponent;
  let fixture: ComponentFixture<ZaposleniPromocijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaposleniPromocijaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZaposleniPromocijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
