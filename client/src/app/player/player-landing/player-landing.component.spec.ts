import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerLandingComponent } from './player-landing.component';

describe('PlayerLandingComponent', () => {
  let component: PlayerLandingComponent;
  let fixture: ComponentFixture<PlayerLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
