import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupacObavestenjaComponent } from './kupac-obavestenja.component';

describe('KupacObavestenjaComponent', () => {
  let component: KupacObavestenjaComponent;
  let fixture: ComponentFixture<KupacObavestenjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KupacObavestenjaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KupacObavestenjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
