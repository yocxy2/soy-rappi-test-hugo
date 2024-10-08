import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBlockComponent } from './news-block.component';

describe('NewsBlockComponent', () => {
  let component: NewsBlockComponent;
  let fixture: ComponentFixture<NewsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsBlockComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
