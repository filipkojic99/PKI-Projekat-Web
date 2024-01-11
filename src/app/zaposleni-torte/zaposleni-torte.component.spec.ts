import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaposleniTorteComponent } from './zaposleni-torte.component';

describe('ZaposleniTorteComponent', () => {
  let component: ZaposleniTorteComponent;
  let fixture: ComponentFixture<ZaposleniTorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaposleniTorteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZaposleniTorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
