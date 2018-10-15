import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildFooterComponent } from './build-footer.component';

describe('BuildFooterComponent', () => {
  let component: BuildFooterComponent;
  let fixture: ComponentFixture<BuildFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
