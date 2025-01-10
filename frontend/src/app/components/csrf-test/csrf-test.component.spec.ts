import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsrfTestComponent } from './csrf-test.component';

describe('CsrfTestComponent', () => {
  let component: CsrfTestComponent;
  let fixture: ComponentFixture<CsrfTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CsrfTestComponent]
    });
    fixture = TestBed.createComponent(CsrfTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
