import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRollerAdminComponent } from './table-roller-admin.component';

describe('TableRollerAdminComponent', () => {
  let component: TableRollerAdminComponent;
  let fixture: ComponentFixture<TableRollerAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableRollerAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableRollerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
