import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacedetailsComponent } from './spacedetails.component';

describe('SpacedetailsComponent', () => {
  let component: SpacedetailsComponent;
  let fixture: ComponentFixture<SpacedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
