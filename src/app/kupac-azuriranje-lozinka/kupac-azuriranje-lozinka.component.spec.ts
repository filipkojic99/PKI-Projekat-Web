import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupacAzuriranjeLozinkaComponent } from './kupac-azuriranje-lozinka.component';

describe('KupacAzuriranjeLozinkaComponent', () => {
  let component: KupacAzuriranjeLozinkaComponent;
  let fixture: ComponentFixture<KupacAzuriranjeLozinkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KupacAzuriranjeLozinkaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KupacAzuriranjeLozinkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
