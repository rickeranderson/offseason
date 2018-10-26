import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditActivityDialogComponent } from './create-edit-activity-dialog.component';

describe('CreateEditActivityDialogComponent', () => {
  let component: CreateEditActivityDialogComponent;
  let fixture: ComponentFixture<CreateEditActivityDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditActivityDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditActivityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
