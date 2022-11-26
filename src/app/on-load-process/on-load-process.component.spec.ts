import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnLoadProcessComponent } from './on-load-process.component';

describe('OnLoadProcessComponent', () => {
  let component: OnLoadProcessComponent;
  let fixture: ComponentFixture<OnLoadProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnLoadProcessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnLoadProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
