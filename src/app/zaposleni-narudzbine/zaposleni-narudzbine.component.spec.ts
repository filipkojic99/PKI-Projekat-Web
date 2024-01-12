import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaposleniNarudzbineComponent } from './zaposleni-narudzbine.component';

describe('ZaposleniNarudzbineComponent', () => {
  let component: ZaposleniNarudzbineComponent;
  let fixture: ComponentFixture<ZaposleniNarudzbineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaposleniNarudzbineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZaposleniNarudzbineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
