import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditProyComponent } from './form.edit.proy.component';

describe('FormEditProyComponent', () => {
  let component: FormEditProyComponent;
  let fixture: ComponentFixture<FormEditProyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditProyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditProyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
