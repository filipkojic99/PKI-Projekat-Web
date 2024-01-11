import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupacKomentarComponent } from './kupac-komentar.component';

describe('KupacKomentarComponent', () => {
  let component: KupacKomentarComponent;
  let fixture: ComponentFixture<KupacKomentarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KupacKomentarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KupacKomentarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
