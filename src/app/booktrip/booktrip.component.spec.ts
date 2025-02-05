import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooktripComponent } from './booktrip.component';

describe('BooktripComponent', () => {
  let component: BooktripComponent;
  let fixture: ComponentFixture<BooktripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooktripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooktripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
