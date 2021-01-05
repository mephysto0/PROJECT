import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NzFormComponent } from './form.component';

describe('FormComponent', () => {
  let component: NzFormComponent;
  let fixture: ComponentFixture<NzFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NzFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NzFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
