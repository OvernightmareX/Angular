import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRollerComponent } from './form-roller.component';

describe('FormRollerComponent', () => {
  let component: FormRollerComponent;
  let fixture: ComponentFixture<FormRollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRollerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
