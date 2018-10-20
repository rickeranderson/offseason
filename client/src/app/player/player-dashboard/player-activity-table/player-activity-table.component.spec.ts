import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerActivityTableComponent } from './player-activity-table.component';

describe('PlayerActivityTableComponent', () => {
  let component: PlayerActivityTableComponent;
  let fixture: ComponentFixture<PlayerActivityTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerActivityTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerActivityTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
