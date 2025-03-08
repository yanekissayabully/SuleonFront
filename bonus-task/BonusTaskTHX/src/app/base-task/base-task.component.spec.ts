import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseTaskComponent } from './base-task.component';

describe('BaseTaskComponent', () => {
  let component: BaseTaskComponent;
  let fixture: ComponentFixture<BaseTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
