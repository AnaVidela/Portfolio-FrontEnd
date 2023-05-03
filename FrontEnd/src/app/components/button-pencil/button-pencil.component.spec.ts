import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPencilComponent } from './button-pencil.component';

describe('ButtonPencilComponent', () => {
  let component: ButtonPencilComponent;
  let fixture: ComponentFixture<ButtonPencilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonPencilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonPencilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
