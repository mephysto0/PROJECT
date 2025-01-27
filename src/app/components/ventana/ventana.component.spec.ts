import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaComponent } from './ventana.component';

describe('VentanaComponent', () => {
  let component: VentanaComponent;
  let fixture: ComponentFixture<VentanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
