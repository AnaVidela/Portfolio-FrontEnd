import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditExpComponent } from './form.edit.exp.component';

describe('FormEditExpComponent', () => {
  let component: FormEditExpComponent;
  let fixture: ComponentFixture<FormEditExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditExpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
