import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRollerComponent } from './table-roller.component';

describe('TableRollerAdminComponent', () => {
  let component: TableRollerComponent;
  let fixture: ComponentFixture<TableRollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableRollerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableRollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
