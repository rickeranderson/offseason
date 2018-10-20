import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPlayersGraphComponent } from './all-players-graph.component';

describe('AllPlayersGraphComponent', () => {
  let component: AllPlayersGraphComponent;
  let fixture: ComponentFixture<AllPlayersGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPlayersGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPlayersGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
