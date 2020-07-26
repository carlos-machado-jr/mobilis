import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteSkeletonComponent } from './teste-skeleton.component';

describe('TesteSkeletonComponent', () => {
  let component: TesteSkeletonComponent;
  let fixture: ComponentFixture<TesteSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteSkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
