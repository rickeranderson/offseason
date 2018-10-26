import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAthletesComponent } from './top-athletes.component';

describe('TopAthletesComponent', () => {
  let component: TopAthletesComponent;
  let fixture: ComponentFixture<TopAthletesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopAthletesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAthletesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
