import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditPersonaComponent } from './form.edit.persona.component';

describe('FormEditPersonaComponent', () => {
  let component: FormEditPersonaComponent;
  let fixture: ComponentFixture<FormEditPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditPersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
