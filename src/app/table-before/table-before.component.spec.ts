import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBeforeComponent } from './table-before.component';

describe('TableBeforeComponent', () => {
  let component: TableBeforeComponent;
  let fixture: ComponentFixture<TableBeforeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableBeforeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBeforeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
