import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeLandComponent } from './recipe-land.component';

describe('RecipeLandComponent', () => {
  let component: RecipeLandComponent;
  let fixture: ComponentFixture<RecipeLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeLandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
