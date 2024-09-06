import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollerCardComponent } from './roller-card.component';

describe('RollerCardComponent', () => {
  let component: RollerCardComponent;
  let fixture: ComponentFixture<RollerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RollerCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RollerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
