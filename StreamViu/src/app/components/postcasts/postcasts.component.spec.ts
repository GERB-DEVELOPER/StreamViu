import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcastsComponent } from './postcasts.component';

describe('PostcastsComponent', () => {
  let component: PostcastsComponent;
  let fixture: ComponentFixture<PostcastsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostcastsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostcastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
