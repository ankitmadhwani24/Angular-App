import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceTicketsComponent } from './space-tickets.component';

describe('SpaceTicketsComponent', () => {
  let component: SpaceTicketsComponent;
  let fixture: ComponentFixture<SpaceTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
