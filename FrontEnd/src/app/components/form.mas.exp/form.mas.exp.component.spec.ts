import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMasExpComponent } from './form.mas.exp.component';

describe('FormMasExpComponent', () => {
  let component: FormMasExpComponent;
  let fixture: ComponentFixture<FormMasExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMasExpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMasExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
