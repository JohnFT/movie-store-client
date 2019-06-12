import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrentsComponent } from './myrents.component';

describe('MyrentsComponent', () => {
  let component: MyrentsComponent;
  let fixture: ComponentFixture<MyrentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyrentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyrentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
