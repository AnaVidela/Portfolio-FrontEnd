import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMasProyComponent } from './form.mas.proy.component';

describe('FormMasProyComponent', () => {
  let component: FormMasProyComponent;
  let fixture: ComponentFixture<FormMasProyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMasProyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMasProyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
