import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedNovelsComponent } from './featured-novels.component';

describe('FeaturedNovelsComponent', () => {
  let component: FeaturedNovelsComponent;
  let fixture: ComponentFixture<FeaturedNovelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedNovelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedNovelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
