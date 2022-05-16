import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailFoodComponent } from './show-detail-food.component';

describe('ShowDetailFoodComponent', () => {
  let component: ShowDetailFoodComponent;
  let fixture: ComponentFixture<ShowDetailFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDetailFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
