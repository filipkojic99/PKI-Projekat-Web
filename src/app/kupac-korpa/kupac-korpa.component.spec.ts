import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupacKorpaComponent } from './kupac-korpa.component';

describe('KupacKorpaComponent', () => {
  let component: KupacKorpaComponent;
  let fixture: ComponentFixture<KupacKorpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KupacKorpaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KupacKorpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
