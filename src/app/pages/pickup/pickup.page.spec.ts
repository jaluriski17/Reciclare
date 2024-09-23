import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PikupPage } from './pickup.page';

describe('PikupPage', () => {
  let component: PikupPage;
  let fixture: ComponentFixture<PikupPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PikupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
