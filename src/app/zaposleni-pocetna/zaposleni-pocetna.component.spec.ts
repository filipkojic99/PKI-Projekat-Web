import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaposleniPocetnaComponent } from './zaposleni-pocetna.component';

describe('ZaposleniPocetnaComponent', () => {
  let component: ZaposleniPocetnaComponent;
  let fixture: ComponentFixture<ZaposleniPocetnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaposleniPocetnaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZaposleniPocetnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
